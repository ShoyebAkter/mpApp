import { Fade } from "react-awesome-reveal";
import '../Introduction.css'
export const Allies = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      companyLogo: "/holismus.png",
      text:
        "We put our trust in EulerMail and they delivered, making sure our needs were met and deadlines were always hit."
    },
    {
      id: 2,
      name: "Jane Smith",
      companyLogo: "/angularis.png",
      text:
        "EulerMail enthusiasm coupled with their keen interest in our brands success made it a satisfying and enjoyable experience."
    },
    {
      id: 3,
      name: "Alice Johnson",
      companyLogo: "/maximo.png",
      text:
        "Incredible end result! Our sales increased over 400% when we worked with EulerMail. Highly recommended!"
    },
    {
      id: 4,
      name: "Sam Johnson",
      companyLogo: "corredores.png",
      text:
        "Incredible end result! Our sales increased over 400% when we worked with EulerMail. Highly recommended!"
    }
  ];
  return (
    <section className=" background px-10 py-12">
      <div className="mx-auto px-4">
        <h2 style={{"color":"#649445"}} className="text-3xl font-bold text-center py-2">Our Allies</h2>
        <div className="flex justify-around items-center ">
          <Fade cascade>
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                // className=" rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300"
              >
                 <img src={testimonial.companyLogo} alt=""/>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  )
}
