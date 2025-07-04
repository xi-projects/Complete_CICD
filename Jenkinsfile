pipeline {
	agent any
	tools {
		nodejs 'NodeJS'
	}

	stages {
		stage('GitHub'){
			steps {
				git branch: 'main', credentialsId: 'jen-git-dind', url: 'https://github.com/xi-projects/Complete_CICD.git'
			}
		}
		stage('Unit Test'){
			steps {
				sh 'npm test'
				sh 'npm install'		
			}
		}
    }
}