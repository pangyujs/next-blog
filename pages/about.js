import Layout from "../components/Layout";

export default function About({ data }) {
  return (
    <Layout>
      <h1>My name is {data.name}</h1>
      <email>{data.email}</email>
      <div>
        <a href={data.github}>github</a>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await Promise.resolve({
    name: "meng",
    email: "mengxiangyu@foxmail.com",
    github: "https://github.com/pangyujs",
  });

  return {
    props: {
      data: res,
    },
  };
}
