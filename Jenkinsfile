pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Github') {
            steps {
                git branch: 'main', credentialsId: 'jen-git-dind', url: 'https://github.com/xi-projects/Complete_CICD.git'
            }
        }
    }
    stages {
        stage('Unit test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
