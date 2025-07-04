pipeline {
    agent any
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
                 echo 'Unit test stage'
            }
        }
    }
}
