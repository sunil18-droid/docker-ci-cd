pipeline{
agent any
stages{
stage('Checkout'){
steps{
echo 'Source code is available in the workspace'
}
}
stage('Build Docker image'){
steps{
sh 'docker build -t docker-ci-cd-demo:latest .'
}
}
stage('Deploy Container') {
steps{
sh '''
docker rm -f docker-ci-cd-demo || true
docker run -d --name docker-ci-cd-demo -p 3000:3000 docker-ci-cd-demo:latest
'''
}
}
stage('Verify Deployment'){
steps{
sh'docker ps'
sh 'curl -f http://localhost:3000'
}
}
}
}
