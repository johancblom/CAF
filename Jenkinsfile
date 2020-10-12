pipeline {
 agent any

 tools {nodejs "node"}

 stages {
  stage('Cypress Parallel Test Suite') {
   parallel {
    stage('Slave Node1') {
     agent {
      label "remode_node1"
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
      label "remote_node2"
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
  stage('Publish Results and Artifacts 1') {
   agent {
    label "remode_node1"
   }
   steps {
    archiveArtifacts('results/cypress-report-*.xml')
   }
  }
  stage('Publish Results and Artifacts 2') {
   agent {
    label "remote_node2"
   } 
   steps {
    archiveArtifacts('results/cypress-report-*.xml')
   }
  }
 }
 post {
  always {
   junit 'results/cypress-report-*.xml'
  }
 }
}