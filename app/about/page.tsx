import Link from "next/link";

export default function About() {
  return (
    <div className="wrapper mt-8 mb-20">
      <h2 className="text-4xl mb-4 font-mono">About Us</h2>
      <p className="text-gray-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam sed at
        consequatur necessitatibus quos quaerat? Adipisci quia ad id animi
        temporibus. Esse delectus quisquam placeat vero dolorem sed omnis
        laboriosam non ipsa quo facilis a autem laudantium dolore blanditiis
        distinctio molestias quam architecto eaque doloremque optio est commodi,
        repellat aliquam! Tempora pariatur iste eligendi possimus ex facere,
        molestiae omnis provident autem corrupti ducimus. Repellat nisi
        veritatis nemo corporis eos quas totam maxime ratione culpa, voluptates
        expedita suscipit, esse laboriosam consequatur consectetur sed
        quibusdam? Asperiores doloremque sapiente dolor aperiam, tempora iusto
        ipsum provident accusantium molestiae Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Laborum libero unde id, veritatis officia
        voluptates quia, cum ex nam, doloribus a? Id quisquam doloremque quaerat
        numquam t
      </p>
      <p className="text-gray-700 mt-8">Office Hours: 10AM - 8PM</p>
      <p className="text-gray-700 ">
        Location: College Gate, Konabari, Gazipur
      </p>
      <p className="text-gray-700 ">Google Map Location: </p>
      <p className="text-gray-700 ">Hotline: 0199999999</p>
      <Link href="/">
        <button className="button-secondary rounded-md! h-14! w-40! text-[14px] mt-4 ">
          Home
        </button>
      </Link>
    </div>
  );
}
