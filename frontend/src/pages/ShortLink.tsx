import { useEffect, useState } from "react";
import instance from "../api";

interface GeneratedURL {
  shortId: string;
  redirectURL: string;
  visitHistory: Array<{
    timestamp: string;
  }>;
}

const ShortLink = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generatedUrls, setGeneratedUrls] = useState<GeneratedURL[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchGeneratedUrls = async () => {
    try {
      const response = await instance.get("/url/getAllGeneratedShortURLs");
      setGeneratedUrls(response.data);
    } catch (error) {
      console.error("Error fetching generated URLs:", error);
    }
  };

  useEffect(() => {
    fetchGeneratedUrls();
  }, []);

  const handleShortenURL = async () => {
    if (!longUrl.trim()) {
      alert("Please enter a URL");
      return;
    }

    setLoading(true);
    try {
      const response = await instance.post("/url", {
        url: longUrl,
      });

      if (response.status === 201) {
        const shortId = response.data.shortId;
        setShortUrl("http://localhost:3000/url/" + shortId);
        setLongUrl(""); // Clear input
        await fetchGeneratedUrls(); // Refresh list
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleShortenURL();
    }
  };

  // Optimistically increase visit count when link is clicked
  const handleLinkClick = (index: number) => {
    // Immediately update UI
    setGeneratedUrls((prevUrls) => {
      const updatedUrls = [...prevUrls];
      updatedUrls[index] = {
        ...updatedUrls[index],
        visitHistory: [
          ...updatedUrls[index].visitHistory,
          { timestamp: new Date().toISOString() },
        ],
      };
      return updatedUrls;
    });

    // Then fetch from server to sync in background
    fetchGeneratedUrls();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            URL Shortener
          </h1>
          <p className="text-gray-600">
            Convert long URLs into short, shareable links
          </p>
        </div>

        {/* Shortening Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Create Short Link
          </h2>

          {/* Input and Button */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Enter your long URL here..."
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              onClick={handleShortenURL}
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Shortening..." : "Shorten URL"}
            </button>
          </div>

          {/* Shortened URL Display */}
          {shortUrl && (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <p className="text-gray-700 font-semibold mb-2">
                Your Shortened URL:
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-mono break-all"
                >
                  {shortUrl}
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(shortUrl);
                    alert("Copied to clipboard!");
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Generated URLs Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Your Generated URLs
          </h2>

          {generatedUrls && generatedUrls.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      #
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Original URL
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Short Link
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">
                      Visits
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {generatedUrls.map((url, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-gray-600">{index + 1}</td>
                      <td className="py-3 px-4">
                        <a
                          href={url.redirectURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 truncate block"
                          title={url.redirectURL}
                        >
                          {url.redirectURL}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href={"http://localhost:3000/url/" + url.shortId}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleLinkClick(index)}
                          className="text-indigo-600 hover:text-indigo-800 font-mono"
                        >
                          /{url.shortId}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold animate-pulse">
                          {url?.visitHistory?.length || 0}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No URLs generated yet. Create one to get started!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortLink;
