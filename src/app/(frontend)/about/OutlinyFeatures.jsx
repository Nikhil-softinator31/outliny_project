export default function OutlinyFeatures() {
  return (
    <div className="text-white">
    

      {/* Background Grid Section */}
      <div
        className=" h-[450px] md:h-[650px] bg-center bg-contain bg-no-repeat grid place-items-center "
        style={{ backgroundImage: "url('/Grid..svg')",
          marginTop:'50px',
         }}
      >
        {/* base - sm: stacked layout */}
        <div className="flex flex-col items-center space-y-4   text-center text-base sm:text-lg md:hidden ">
          <p>
            We've built Outliny
            <br />
            for the people behind the code
          </p>
          <p>
            Outline is flexible, API-driven built,
            <br />
            standards like MJML and Jinja2.
          </p>
          <p>
            Believe in transparency—how
            <br />
            we handle data to how we price.
          </p>
          <p>
            Outliny is designed to grow
            <br />
            with your organization
          </p>
          <p>
            Your data security and privacy
            <br />
            are our highest priority.
          </p>
          <p>
            Outliny is also open-source,
            <br />
            you can host it yourself
          </p>
        </div>

        {/* md and up: full diagram */}
        <div className="relative hidden md:grid w-full max-w-5xl h-[500px] place-items-center ml-3">
          {/* Center Text */}
          <div className="text-4xl font-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-poppins text-white text-center">
            What Drives Us
          </div>

          {/* Arrows */}
          <svg className="absolute w-full h-full pointer-events-none z-0">
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
              </marker>
            </defs>
            {/* top arrow */}
            <line
              x1="50%"
              y1="22%"
              x2="50%"
              y2="42%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#arrow)"
            />
            {/* bottom arrow */}

            <line
              x1="50%"
              y1="80%"
              x2="50%"
              y2="60%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#arrow)"
            />
            {/* top left arrow */}

            <line
              x1="25%"
              y1="35%"
              x2="35%"
              y2="45%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#arrow)"
            />
            {/* bottom left arrow */}

            <line
              x1="25%"
              y1="65%"
              x2="35%"
              y2="55%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#arrow)"
            />
            {/* top right arrow */}

            <line
              x1="75%"
              y1="35%"
              x2="65%"
              y2="45%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#arrow)"
            />
            {/* top bottom arrow */}

            <line
              x1="75%"
              y1="65%"
              x2="65%"
              y2="55%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#arrow)"
            />
          </svg>

          {/* Feature Boxes */}
          <div className="absolute top-11 left-1/2 transform -translate-x-1/2 text-center w-64 text-base">
            <p>
              We've built Outliny
              <br />
              for the people behind the code
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center w-64 text-base">
            <p>
              Outliny  is flexible, API-driven built,
              <br />
              standards like MJML and Jinja2
            </p>
          </div>

          <div className="absolute left-0 top-1/4 ml-3 text-left w-64 text-base">
            <p>
              Believe in transparency—how
              <br />
              we handle data to how we price
            </p>
          </div>

          <div className="absolute left-7 bottom-1/4 text-left w-64 text-base">
            <p>
              Outliny is designed to grow
              <br />
              with your organization
            </p>
          </div>

          <div className="absolute  -right-3 top-1/4 text-left w-64 text-base ">
            <p>
              Your data security and privacy
              <br />
              are our highest priority
            </p>
          </div>

          <div className="absolute -right-3 bottom-1/4 text-left w-64 text-base">
            <p>
              Outliny is also open-source,
              <br />
              you can host it yourself
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
