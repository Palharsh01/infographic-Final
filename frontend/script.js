document.getElementById('screenshotBtn').addEventListener('click', async () => {
  const response = await fetch('https://infographic-final.onrender.com/screenshot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: window.location.href })
  });
  const blob = await response.blob();
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'screenshot.png';
  link.click();
});
