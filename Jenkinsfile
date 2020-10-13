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
      script {

      try {
       bat 'npm run triggerAllTests-dashboard'
      } catch (err) {
        if (currentBuild.result == 'UNSTABLE')
                currentBuild.result = 'FAILURE'
            throw err
        } finally {
      step([$class: 'JUnitResultArchiver', testResults: 'results/cypress-report-*.xml', healthScaleFactor: 1.0])
      archiveArtifacts 'results/cypress-report-*.xml'
      }
      }
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
      script {

      try {
       bat 'npm run triggerAllTests-dashboard'
      } catch (err) {
        if (currentBuild.result == 'UNSTABLE')
                currentBuild.result = 'FAILURE'
            throw err
        } finally {
      step([$class: 'JUnitResultArchiver', testResults: 'results/cypress-report-*.xml', healthScaleFactor: 1.0])
            archiveArtifacts 'results/cypress-report-*.xml'
      }
      }
     }
    }
   }
  }
 }
}