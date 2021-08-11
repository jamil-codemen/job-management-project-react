import React from "react";
class ApplyJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="min-h-screen bg-gray-100 flex items-center p-4">
          <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
            <form
              onSubmit={this.handleSubmit}
              className="py-12 p-10 bg-white rounded-xl"
            >
              <div className="mb-6">
                <label
                  className="mr-4 text-gray-700 font-bold inline-block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                  placeholder="Your name"
                  name={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mr-4 text-gray-700 font-bold inline-block mb-2"
                  
                >
                  Position
                </label>
                <input
                  type="text"
                  className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                  placeholder="Position You are applying for"
                />
              </div>
              <div className="mb-6">
                <label
                  className="mr-4 text-gray-700 font-bold inline-block mb-2"
                  
                >
                  Email
                </label>
                <input
                  type="text"
                  className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                  placeholder="@email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="mr-4 text-gray-700 font-bold inline-block mb-2"
                  
                >
                  Portfolio Url
                </label>
                <input
                  type="text"
                  className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                  placeholder="@github dribble behance personal project etc"
                />
              </div>
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <div className="">
                    <label
                      className="mr-4 text-gray-700 font-bold inline-block mb-2"
                      
                    >
                      Years of Experince
                    </label>
                    <input
                      type="text"
                      className="border bg-gray-100 py-2 px-4 w-40 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                      placeholder="@email"
                    />
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="">
                    <label
                      className="mr-4 text-gray-700 font-bold inline-block mb-2"
                    >
                      Tech Stack
                    </label>
                    <input
                      type="text"
                      className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                      placeholder="@your stack here"
                    />
                  </div>
                </div>
              </div>
              <div className="my-6">
                <span className="mb-2 inline-block text-base leading-normal">
                  Upload Resume
                </span>
                <input
                  type="file"
                  placeholder="hello"
                  className="w-full bg-white border-blue-600"
                />
                <span className=" inline-block text-sm mt-2">
                  Please upload a pdf file
                </span>
              </div>
              <button
                type="submit"
                className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ApplyJobForm;
