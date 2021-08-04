export default function JobDetail() {
  return (
    <div className="border-2 rounded-lg border-blue-400  p-4">
      <div className="flex flex-wrap flex-row justify-between">
        <div>
          <h1>Title</h1>
        </div>
        <div>
          <p>Love</p>
        </div>
        <div>
          <div className="flex flex-wrap flex-row">
            <div>
              <p>Close</p>
            </div>
            <div>
              <p>Close</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row">
        <div>
          <p>Company Name</p>
        </div>
        <div>
          <p>Rating</p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row">
        <div>
          <p>Description</p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row">
        <div>
          <p>Published</p>
        </div>
        <div>
          <p>Apply now</p>
        </div>
      </div>
    </div>
  );
}
