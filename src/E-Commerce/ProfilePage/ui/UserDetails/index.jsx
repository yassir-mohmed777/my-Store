export default function UserDeatils({userName , userEmail}) {
  return (
    <div className="mt-5">
        <h3>Account Details:</h3>
        <p>{userName}</p>
        <table className="table table-bordered text-center">
    <tbody>
      <tr>
        <td className="text-secondary">Name :</td>
        <td className="fw-bold text-start text-secondary">{userName}</td>
      </tr>
      <tr>
        <td className="text-secondary">Email :</td>
        <td className="fw-bold text-start text-secondary">{userEmail}</td>
      </tr>
      <tr>
        <td className="text-secondary">Address : </td>
        <td className="fw-bold text-start text-secondary">--</td>
      </tr>
      <tr>
        <td className="text-secondary">Address 2:</td>
        <td className="fw-bold text-start text-secondary">--</td>
      </tr>
    </tbody>
  </table>
    </div>
  )
}
