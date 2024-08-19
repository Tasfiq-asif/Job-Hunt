

function Blogs() {
  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
          From the blog
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://cdn-ilaeled.nitrocdn.com/xjlTIzzcFlDZkNcCPnCAGIxXrnjmbkuM/assets/images/optimized/wp-content/uploads/2023/08/04737a09c0e1d25c51d9094bb0440dd5.banner_container-security-980x515.png"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="/blogs/accesstoken"
                className="text-xl font-semibold hover:underline "
              >
                Refresh token and Access token in jwt
              </a>

              <span className="text-sm">On: 16 May 2024</span>
            </div>
          </div>

          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://cdn.dribbble.com/users/808903/screenshots/3831862/dribbble_szablon__1_1.png?resize=800x600&vertical=center"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="/blogs/nest"
                className="text-xl font-semibold hover:underline "
              >
                Refresh token and Access token in jwt
              </a>

              <span className="text-sm">On: 16 May 2024</span>
            </div>
          </div>

          {/* Repeat the similar structure for other blog items */}
        </div>
      </div>
    </section>
  );
}

export default Blogs