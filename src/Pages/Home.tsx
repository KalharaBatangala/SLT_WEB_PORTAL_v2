const Home = () => {
  const token = localStorage.getItem('accessToken');
  return (
    <div>{token}</div>
  )
}

export default Home