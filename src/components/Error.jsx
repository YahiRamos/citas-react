const Error = ({children}) => {
  return (
    <div className="bg-red-600 rounded-md 
    text-white text-center p-5 uppercase font-bold mb-3">
      {children}
    </div>
  )
}

export default Error
