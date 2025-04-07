import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axios';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axiosInstance.get('/feedbacks')
      .then(res => {
        setFeedbacks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <span className="loading loading-infinity loading-xl text-primary"></span>
        <p className="text-lg font-medium">Fetching feedbacks...</p>
        <p className="text-lg font-medium text-gray-500">Please note: The backend is hosted on Render and may take up to a minute to respond after periods of inactivity.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full my-6">
      {feedbacks.map((feedback, id) => (
        <div key={id} className="card bg-base-300 shadow-md p-4 w-full md:w-1/2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">{feedback.fullName}</h3>
            <span className="text-xs text-blue-500">
              {new Date(feedback.createdAt).toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-gray-500">{feedback.email}</p>
          <p>{feedback.message}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
