export default function ResponsiveCard() {
  const cards = [
    {
      id: 1, title: "Bai hoc dau doi ve responsive card project, Bai hoc dau doi ve responsive card project",
      desc: "Noi dung card co dieu quan trong gi khong ? Toi khong biet nua!",
      img: "https://hips.hearstapps.com/hmg-prod/images/msm2-reveal-attack-4k-legal-65284680c18ba.jpg?crop=0.490xw:0.872xh;0.115xw,0&resize=1120:*",
      price: 200,
      rating: 4,
      status: "Available"
    },
    {
      id: 2, title: "Bai hoc dau doi ve responsive card project, Bai hoc dau doi ve responsive card project",
      desc: "Noi dung card co dieu quan trong gi khong ? Toi khong biet nua!",
      img: "https://hips.hearstapps.com/hmg-prod/images/msm2-reveal-attack-4k-legal-65284680c18ba.jpg?crop=0.490xw:0.872xh;0.115xw,0&resize=1120:*",
      price: 200,
      rating: 4,
      status: "Available"
    },
    {
      id: 3, title: "Bai hoc dau doi ve responsive card project",
      desc: "Noi dung card co dieu quan trong gi khong ? Toi khong biet nua!",
      img: "https://hips.hearstapps.com/hmg-prod/images/msm2-reveal-attack-4k-legal-65284680c18ba.jpg?crop=0.490xw:0.872xh;0.115xw,0&resize=1120:*",
      price: 200,
      rating: 4,
      status: "Available"
    },
    {
      id: 4, title: "Bai hoc dau doi ve responsive card project",
      desc: "Noi dung card co dieu quan trong gi khong ? Toi khong biet nua!",
      img: "https://hips.hearstapps.com/hmg-prod/images/msm2-reveal-attack-4k-legal-65284680c18ba.jpg?crop=0.490xw:0.872xh;0.115xw,0&resize=1120:*",
      price: 200,
      rating: 4,
      status: "Available"
    },
    {
      id: 5, title: "Bai hoc dau doi ve responsive card project",
      desc: "Noi dung card co dieu quan trong gi khong ? Toi khong biet nua!",
      img: "https://hips.hearstapps.com/hmg-prod/images/msm2-reveal-attack-4k-legal-65284680c18ba.jpg?crop=0.490xw:0.872xh;0.115xw,0&resize=1120:*",
      price: 200,
      rating: 4,
      status: "Available"
    },

  ]

  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(card => (
            // card
            <div key={card.id} className="relative flex sm:flex-row items-center bg-white shadow rounded-lg p-4 pt-8 sm:pt-8 md:pt-6" >
              {/* top status */}
              <div className="hidden sm:inline absolute top-2 right-2 flex space-x-2">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">{card.status}</span>
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">{card.status}</span>
              </div>

              {/* img left */}
              <img src={card.img} alt={card.title} className="w-24 h-auto sm:h-20 sm:w-20 md:h-24 md:w-24 lg:w-28 lg:h-28 h-auto object-cover rounded-md mr-4 flex-shrink-0" />
              {/* content right */}
              <div className="flex-1 min-w-0 space-y-1">
                <h3 className="text-lg font-semibold truncate">{card.title}</h3>
                <div className="sm:hidden mt-2 flex space-x-2">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">{card.status}</span>
                  <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">{card.status}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 truncate">{card.desc}</p>

                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-gray-600 font-bold">Price: {card.price}</span>
                    <span className="text-yellow-500 font-semibold">Rating: {card.rating}</span>
                  </div>
                  <div>
                    <button className="text-gray-600 h-4 w-4">...</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
