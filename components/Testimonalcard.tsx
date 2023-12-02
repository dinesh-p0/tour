import React from 'react'

const Testimonalcard = (props: { content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; imgadd: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => {
  return (
    <div className=''>
        <div className="relative mx-auto mt-8 flex max-w-sm flex-col justify-between rounded-lg bg-gray-100 p-10 leading-snug text-gray-700 shadow-xl">
          <div className="-ml-4">
            <svg
              className="w-8 text-black opacity-25"
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0
                                                                                                             640 640"
              fill="currentColor"
            >
              <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
            </svg>
          </div>
          <div className="mt-2">
            {props.content}
          </div>
          <div>
            <div className="mx-auto my-8 w-full border border-gray-300"></div>
            <div className="flex items-center">
              <div>
                <img
                  className="h-12 w-12 rounded-full "
                  src={props.imgadd}
                />
              </div>
              <div className="ml-4">
                <div className="font-bold">{props.name}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonalcard