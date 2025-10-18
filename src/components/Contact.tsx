import React from "react"

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-niia-beige-light to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-niia-black mb-6">
            Contactez-nous
          </h2>
          <p className="text-lg text-niia-gray max-w-3xl mx-auto">
            Prêt à transformer votre vie ? Contactez-nous pour une consultation gratuite.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
