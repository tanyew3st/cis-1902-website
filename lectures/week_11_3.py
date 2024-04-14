# Import necessary modules
from flask import Flask, request, jsonify

# Initialize the Flask application
app = Flask(__name__)


# Define a route for the GET request
@app.route("/welcome", methods=["GET"])
def welcome():
    # Return a welcome message
    return jsonify({"message": "Welcome to our simple Flask app!"})


# Define a route for the POST request
@app.route("/square", methods=["POST"])
def square():
    # Get the JSON data sent with the request
    data = request.get_json()

    # Check if 'number' is in the data
    if "number" in data:
        # Calculate the square of the number
        squared_value = data["number"] ** 2
        # Return the squared value
        return jsonify({"squared_value": squared_value})
    else:
        # If 'number' not found in the data, return an error message
        return jsonify({"error": "No number provided"}), 400


# Run the app
if __name__ == "__main__":
    app.run(debug=True)
