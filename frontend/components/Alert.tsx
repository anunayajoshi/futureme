import { FaBell } from 'react-icons/fa'

const Alert = ({success} : {success: boolean}) => {
  return (
    <div
      className={`text-white px-6 py-4 border-0 rounded relative mb-4 ${
        success ? "bg-emerald-400" : "bg-rose-400"
      }`}
    >
      <span className="text-xl inline-block mr-5 align-middle">
        <FaBell />
      </span>
      <span className="inline-block align-middle mr-8">
        {success ? (
          <p>
            <b className="capitalize">Success! {" "}</b>
            Your email has been scheduled! A confirmation email has been sent to you. Check your mailbox!
          </p>
        ) : (
          <p>
            <b className="capitalize">Error!</b> Please remember to fill up all
            inputs!
          </p>
        )}
      </span>
      <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
        <span>×</span>
      </button>
    </div>
  );
}

export default Alert