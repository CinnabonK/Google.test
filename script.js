// Google Sheets APIを使うための設定
const SHEET_ID = 'あなたのスプレッドシートID';
const API_KEY = 'あなたのAPIキー';
const SHEET_NAME = 'シート1';

async function sendToSheet() {
    const searchBox = document.getElementById('search-box').value;

    // Google Sheets APIにデータを送信
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A1:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;

    const data = {
        values: [[searchBox]]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('データがスプレッドシートに送信されました');
        } else {
            alert('データ送信に失敗しました');
        }
    } catch (error) {
        console.error('エラー:', error);
    }
}
