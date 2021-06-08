let snippets = [
    {
        name: 'cta-1',
        image: 'cta-1.png',
        class: 'cta',
        content: `<section class="sans text-center my-8 px-8">
  <h1 class="capitalize font-medium">Готовы начать?</h1>
  <p class="text-gray-700 mt-2 mb-6">Возможно, вам стоит передумать прямо сейчас</p>
  <button class="bg-black bg-gray-900:hover text-white text-white:hover py-3 px-6 uppercase font-xs letter-wide">Читать далее</button>
</section>`
    },
    {
        name: 'cta-2',
        image: 'cta-2.png',
        class: 'cta',
        content: `<section class="sans text-center py-8 px-4 lg:px-0 bg-gray-300">
    <div class="container flex flex-col sm:flex-row bg-white max-w-xl m-auto">
        <div class="w-full sm:w-3/4 px-6 pt-6 text-left flex flex-col justify-center">
            <h2 class="capitalize font-medium">Готовы начать?</h2>
            <p class="text-gray-700 mt-2 mb-6">Возможно, вам стоит передумать прямо сейчас</p>
        </div>
            <div class="w-full sm:w-1/4 flex justify-start sm:justify-center items-center pl-6 pb-6 sm:pl-0 sm:pb-0">
            <button class=" bg-black bg-gray-900:hover text-white py-3 px-6 uppercase font-xs letter-wide">Читать далее</button>
        </div>
    </div>
</section>`
    },
    {
        name: 'cards-1',
        image: 'cards-1.png',
        class: 'cards',
        content: `<section class="bg-white py-4 font-sans">
        <div class="m-auto flex flex-wrap items-center justify-flex-start">
      
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white border-rd-lg shadow shadow-lg border-1 border-solid border-gray-300">
              <img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Cards">
              <div class="p-6 flex flex-col justify-between ">
                <h3 class="font-medium text-gray-900 mb-4 line-h-normal">Программное обеспечение для образовательных учреждений
                </h3>
                <p class="inline-flex justify-items-center">
                  <span class="text-gray-700 font-sm">Читать далее</span>
                </p>
              </div>
            </div>
          </div>
      
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white border-rd-lg shadow shadow-lg border-1 border-solid border-gray-300">
              <img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Cards">
              <div class="p-6 flex flex-col justify-between ">
                <h3 class="font-medium text-gray-900 mb-4 line-h-normal">Программное обеспечение для образовательных учреждений
                </h3>
                <p class="inline-flex justify-items-center">
                  <span class="text-gray-700 font-sm">Читать далее</span>
                </p>
              </div>
            </div>
          </div>
      
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white border-rd-lg shadow shadow-lg border-1 border-solid border-gray-300">
              <img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Cards">
              <div class="p-6 flex flex-col justify-between ">
                <h3 class="font-medium text-gray-900 mb-4 line-h-normal">Программное обеспечение для образовательных учреждений
                </h3>
                <p class="inline-flex justify-items-center">
                  <span class="text-gray-700 font-sm">Читать далее</span>
                </p>
              </div>
            </div>
          </div>
      
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white border-rd-lg shadow shadow-lg border-1 border-solid border-gray-300">
              <img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Cards">
              <div class="p-6 flex flex-col justify-between ">
                <h3 class="font-medium text-gray-900 mb-4 line-h-normal">Программное обеспечение для образовательных учреждений
                </h3>
                <p class="inline-flex justify-items-center">
                  <span class="text-gray-700 font-sm">Читать далее</span>
                </p>
              </div>
            </div>
          </div>
      
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white border-rd-lg shadow shadow-lg border-1 border-solid border-gray-300">
              <img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Cards">
              <div class="p-6 flex flex-col justify-between ">
                <h3 class="font-medium text-gray-900 mb-4 line-h-normal">Программное обеспечение для образовательных учреждений
                </h3>
                <p class="inline-flex justify-items-center">
                  <span class="text-gray-700 font-sm">Читать далее</span>
                </p>
              </div>
            </div>
          </div>
      
        </div>
      </section>`
    },
    {
        name: 'cards-2',
        image: 'cards-2.png',
        class: 'cards',
        content: `
      <section class="bg-white py-4 sans">
        <div class="max-w-full m-auto flex flex-wrap flex-col md:flex-row justify-items-center justify-flex-start">
          <div class="w-full lg:w-1/2 p-3">
            <div class="flex flex-col lg:flex-row border-rd overflow-hidden h-auto lg:h-32 border-1 border-solid border-gray-300 shadow shadow-lg">
              <img class="block h-auto w-full lg:w-48 flex-none bg-size-cover"
                   src="https://source.unsplash.com/random/200x125">
              <div class="bg-white border-rd-b lg:border-rd-b-none lg:border-rd-r p-4 flex flex-col justify-between line-h-normal">
                <div class="text-black font-bold font-xl mb-2 line-h-tight">Станете ли вы хорошим разработчиком?</div>
                <p class="text-gray-700 font-base">Читать далее</p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-3">
            <div class="flex flex-col lg:flex-row border-rd overflow-hidden h-auto lg:h-32 border-1 border-solid border-gray-300 shadow shadow-lg">
              <img class="block h-auto w-full lg:w-48 flex-none bg-size-cover"
                   src="https://source.unsplash.com/random/200x125">
              <div class="bg-white border-rd-b lg:border-rd-b-none lg:border-rd-r p-4 flex flex-col justify-between line-h-normal">
                <div class="text-black font-bold font-xl mb-2 line-h-tight">Как стать хорошим разработчиком?</div>
                <p class="text-gray-700 font-base">Читать далее</p>
              </div>
            </div>
          </div>
        </div>
      </section>`
    },
    
]
