import { useState } from 'react';
import { axiosInstance } from '../utils/axios';
import toast from 'react-hot-toast';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live validate email
    if (name === 'email') {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailError(!isValidEmail);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, message } = formData;

    // Final check before submitting
    if (!fullName || !email || !message) {
      toast.error('Please fill all fields');
      return;
    }

    if (emailError) {
      toast.error('Please enter a valid email');
      return;
    }

    setLoading(true);
    try {
      await axiosInstance.post('/submit-feedback', formData);
      toast.success('Feedback submitted successfully!');
      setFormData({ fullName: '', email: '', message: '' });
      setEmailError(false);
    } catch (error) {
      toast.error('Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full my-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col p-6 bg-base-200 rounded shadow-md w-full sm:w-3/4 md:w-1/3"
      >
        {/* Full Name */}
        <div className="form-control w-full mb-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Full Name</legend>
            <input
              type="text"
              name="fullName"
              className="input input-bordered w-full"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Aishwary Dixit"
              required
            />
          </fieldset>
        </div>

        {/* Email */}
        <div className="form-control w-full mb-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              name="email"
              placeholder="aish@example.com"
              className={`input w-full ${emailError ? 'input-error' : 'input-bordered'}`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {emailError && (
              <div className="text-red-500 text-sm mt-1">Enter a valid email address</div>
            )}
          </fieldset>
        </div>

        {/* Message */}
        <div className="form-control w-full mb-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Feedback</legend>
            <textarea
              name="message"
              className="textarea textarea-bordered w-full"
              placeholder="Your feedback"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </fieldset>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
          {loading ? (
            <>
              <span className="loading loading-infinity loading-xl text-primary"></span>
              Submitting...
            </>
          ) : (
            'Submit Feedback'
          )}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
