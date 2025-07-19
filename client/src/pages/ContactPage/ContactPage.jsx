import "./ContactPage.css";
export default function ContactPage() {
  return 
  <div class="hero min-h-screen bg-base-200 flex flex-col justify-center items-center p-4">
  <div class="text-center mb-8">
    <h1 class="text-6xl font-extrabold pb-2" style="background-image: linear-gradient(to right, #FF4500, #FFD700, #FF4500); -webkit-background-clip: text; color: transparent; text-shadow: 0 0 15px rgba(255, 69, 0, 0.7), 0 0 30px rgba(255, 215, 0, 0.5);">
      Contact Us
    </h1>
  </div>

  <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-8">
    <form class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input type="text" placeholder="Your Name" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="Your Email" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Subject</span>
        </label>
        <input type="text" placeholder="Subject" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Message</span>
        </label>
        <textarea class="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Send Message</button>
      </div>
    </form>
  </div>

  <div class="text-center max-w-lg">
    <p class="py-6">Have a question, feedback, or just want to say hello? Fill out the form above and we'll get back to you as soon as possible.</p>
  </div>
</div>
};
