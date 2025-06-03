document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = document.getElementById('query').value;
        if (!query) return;

        // 🔍 ダミー検索結果（実際はAPIやインデックス検索に置き換えてください）
        const dummyResults = [
            { title: "OpenAI", url: "https://openai.com" },
            { title: "Wikipedia", url: "https://wikipedia.org" }
        ];

        // 結果を表示
        resultsDiv.innerHTML = '<h3>検索結果:</h3>';
        dummyResults.forEach(result => {
            const btn = document.createElement('button');
            btn.textContent = result.title;
            btn.onclick = async () => {
                const proxyUrl = `proxy.php?url=${encodeURIComponent(result.url)}`;
                const res = await fetch(proxyUrl);
                const html = await res.text();
                resultsDiv.innerHTML = `<h3>${result.title}</h3><div style="text-align:left;">${html}</div>`;
            };
            resultsDiv.appendChild(btn);
            resultsDiv.appendChild(document.createElement('br'));
        });
    });
});
