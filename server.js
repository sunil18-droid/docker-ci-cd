const http=required('http');
const server=http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end('<h1>Docker CI/CD Applicaion</h1><p>Deployed using Jenkins!</p>');
});
server.listen(3000, '0.0.0.0', () => {
console.log('Application is running on http://localhost:3000');
});
