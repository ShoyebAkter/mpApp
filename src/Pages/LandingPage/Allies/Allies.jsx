
export const Allies = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      company: "ABC Inc.",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tincidunt urna, eget gravida libero dapibus id."
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "XYZ Co.",
      text:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
    },
    {
      id: 3,
      name: "Alice Johnson",
      company: "123 Corp.",
      text:
        "In eget sapien vitae massa efficitur vehicula. Proin interdum, ante eget tincidunt tincidunt, nunc mauris tristique justo, a varius lorem justo at purus."
    }
  ];
  return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Clients Love Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:-translate-y-2 transition duration-300"
              >
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )
}
