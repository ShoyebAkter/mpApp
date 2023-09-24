import { Fade } from "react-awesome-reveal";

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
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Allies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Fade cascade>
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white text-center rounded-lg shadow-md p-6 hover:shadow-lg transform hover:-translate-y-2 transition duration-300"
              >
                <p className="text-gray-600 mb-4 font-medium">{testimonial.text}</p>
                <div className="text-sm text-gray-500">
                  <p className="font-bold text-black text-xl">{testimonial.name}</p>
                  <img className="mx-auto" src={testimonial.companyLogo} alt=""/>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  )
}
