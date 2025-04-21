# Parkinson's Disease Prediction System

## Overview

This project aims to predict the presence of Parkinson's disease using machine learning techniques, primarily focusing on voice-based features. Parkinson's disease is a progressive neurological disorder that affects movement. Early detection is critical for better management and treatment. This system leverages vocal features to predict whether an individual might be suffering from Parkinson's disease.

**Technologies Used:**

- Python (for machine learning)
- FastAPI (for backend API)
- HTML, CSS, JavaScript (for frontend)
- Machine Learning (for prediction)

---

## Features

### 🧠 Machine Learning Model:
- The system uses a machine learning model trained on various vocal features that are often indicative of Parkinson's disease.
- The model uses **Support Vector Machine (SVM)** as the classifier, which has proven effective in binary classification tasks like predicting Parkinson's disease.
- The input features include pitch, jitter, shimmer, and other voice-related parameters.
- The model predicts whether a person is likely to have Parkinson's disease based on these inputs.
  

### 🔍 Early Detection:
- Early detection of Parkinson's disease can greatly improve treatment outcomes.
- By analyzing vocal patterns, this system offers a non-invasive, easy-to-use method for early detection.
  

### 🌐 Web Interface:
- The system has a simple and interactive web interface for input collection.
- Users can enter their vocal data (such as pitch, jitter percentage, etc.) through input fields, and the model will predict the likelihood of Parkinson's disease.


### ⚙️ Backend API:
- FastAPI serves as the backend framework for the system.
- The API processes the data inputted by the user and feeds it to the trained model for prediction.



