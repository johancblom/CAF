pipeline {
 agent any

 tools {nodejs "node"}

 stages {
  stage('Cypress Parallel Test Suite') {
   parallel {
    stage('Slave Node1') {
     agent {
      label "master"
     }
     steps {
      git url: 'https://github.com/johancblom/CAF.git'
      bat 'npm install'
      bat 'npm update'
      bat 'npm run triggerAllTests-dashboard'
     }
    }
    stage('Slave Node2') {
     agent {
      label "master"
     }
     steps {
      git url: 'https://github.com/johancblom/CAF.git'
      bat 'npm install'
      bat 'npm update'
      bat 'npm run triggerAllTests-dashboard'
     }
    }
   }
  }
 }
}