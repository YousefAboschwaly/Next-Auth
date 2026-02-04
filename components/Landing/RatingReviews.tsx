import { MessageSquare, Star } from 'lucide-react'
const reviews = [
  {
    id: 1,
    author: 'Alex Daewn',
    rating: 5,
    date: '4 months ago',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
  },
  {
    id: 2,
    author: 'Alex Daewn',
    rating: 5,
    date: '4 months ago',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
  },
]
export function RatingReviews() {
  return (
    <div className="mt-16 pt-10 border-t border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 relative inline-block">
        Rating & Reviews
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#C19A8B] rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        {/* Score */}
        <div className="flex items-end gap-2">
          <span className="text-8xl font-bold text-gray-900 leading-none">
            4,5
          </span>
          <span className="text-2xl text-gray-400 mb-2">/5</span>
        </div>

        {/* Bars */}
        <div className="space-y-2">
          {[
            {
              stars: 5,
              pct: 67,
              color: 'bg-[#C19A8B]',
            },
            {
              stars: 4,
              pct: 15,
              color: 'bg-[#C19A8B]/50',
            },
            {
              stars: 3,
              pct: 6,
              color: 'bg-[#C19A8B]/30',
            },
            {
              stars: 2,
              pct: 3,
              color: 'bg-[#C19A8B]/20',
            },
            {
              stars: 1,
              pct: 9,
              color: 'bg-[#C19A8B]/10',
            },
          ].map((row) => (
            <div key={row.stars} className="flex items-center gap-4">
              <div className="flex items-center gap-1 w-8">
                <Star className="w-4 h-4 text-[#C19A8B] fill-current" />
                <span className="text-sm font-bold text-gray-600">
                  {row.stars}
                </span>
              </div>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${row.color}`}
                  style={{
                    width: `${row.pct}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm font-bold text-gray-600 w-8 text-right">
                %{row.pct}
              </span>
            </div>
          ))}
        </div>

        {/* Total & Action */}
        <div className="flex flex-col justify-center items-center lg:items-end">
          <div className="text-center lg:text-right mb-4">
            <div className="text-sm text-gray-500 mb-1">Total Reviews</div>
            <div className="text-4xl font-bold text-gray-900">3.0K</div>
          </div>
          <button className="bg-[#C19A8B] hover:bg-[#b0897a] text-white px-6 py-3 rounded-lg flex items-center gap-2 font-bold transition-colors shadow-md">
            <span className="bg-[#E85D04] px-2 py-0.5 rounded text-xs text-white">
              Add Comment
            </span>
            <MessageSquare className="w-5 h-5 opacity-80" />
          </button>
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-50 pb-8 last:border-0"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-900">{review.author}</h3>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < review.rating ? 'text-[#C19A8B] fill-current' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs text-gray-400">{review.date}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {review.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
