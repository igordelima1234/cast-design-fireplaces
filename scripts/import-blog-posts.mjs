import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'nhzcbxp2',
  dataset: 'production',
  apiVersion: '2025-02-20',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const posts = [
  {
    _type: 'post',
    _id: 'post-how-to-choose-cast-stone-color',
    title: 'How to Choose the Perfect Cast Stone Color for Your Fireplace',
    slug: { _type: 'slug', current: 'how-to-choose-cast-stone-color-for-fireplace' },
    excerpt: 'Selecting the right cast stone color for your fireplace can make or break your room\'s design. Learn how to choose the perfect shade to complement your Dallas home.',
    category: 'Home Design',
    readTime: '5 min read',
    publishedAt: '2024-09-01T00:00:00Z',
    body: [
      { _type: 'block', _key: 'b1', style: 'h2', children: [{ _type: 'span', _key: 's1', text: 'Finding the Ideal Cast Stone Color for Your Fireplace' }] },
      { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'One of the greatest advantages of choosing a cast stone fireplace is the ability to select a color that perfectly complements your home\'s interior. Unlike natural stone, which limits you to whatever colors nature provides, cast stone can be manufactured in a wide spectrum of shades and tones. But with so many options available, how do you choose the right one?' }] },
      { _type: 'block', _key: 'b3', style: 'h2', children: [{ _type: 'span', _key: 's3', text: 'Start with Your Room\'s Existing Color Palette' }] },
      { _type: 'block', _key: 'b4', style: 'normal', children: [{ _type: 'span', _key: 's4', text: 'Before selecting a cast stone color, take a careful look at the room where your fireplace will live. Consider the wall colors, flooring, furniture fabrics, and any other dominant design elements. Your cast stone should complement these existing elements rather than compete with them. For rooms with warm tones like beige walls, hardwood floors, or earth-toned furniture, cast stone in warm creams, honey, or sandstone shades will create a cohesive look. For cooler-toned rooms with gray walls or contemporary furnishings, a cast stone in light gray, dove, or soft white can tie everything together beautifully.' }] },
      { _type: 'block', _key: 'b5', style: 'h2', children: [{ _type: 'span', _key: 's5', text: 'Consider the Size of the Room' }] },
      { _type: 'block', _key: 'b6', style: 'normal', children: [{ _type: 'span', _key: 's6', text: 'Color can dramatically affect how spacious a room feels. Lighter cast stone colors tend to open up a space and make it feel larger and more airy. This is ideal for smaller living rooms or spaces where you want the fireplace to blend naturally into the surroundings. Darker cast stone shades create a more intimate and cozy atmosphere, which can be perfect for larger rooms that might otherwise feel impersonal.' }] },
      { _type: 'block', _key: 'b7', style: 'h2', children: [{ _type: 'span', _key: 's7', text: 'Think About Natural Light' }] },
      { _type: 'block', _key: 'b8', style: 'normal', children: [{ _type: 'span', _key: 's8', text: 'The amount of natural light in your room plays a significant role in how cast stone colors appear throughout the day. A color that looks perfect in a showroom might read differently in your home depending on your window placement and exposure. South-facing rooms in Dallas receive abundant warm sunlight, which can make cool-toned stones appear warmer than expected. North-facing rooms receive softer light that can make warm tones appear more muted. We always recommend requesting cast stone samples and viewing them in your actual space at different times of day before making a final decision.' }] },
      { _type: 'block', _key: 'b9', style: 'h2', children: [{ _type: 'span', _key: 's9', text: 'Match Your Architectural Style' }] },
      { _type: 'block', _key: 'b10', style: 'normal', children: [{ _type: 'span', _key: 's10', text: 'Your home\'s architectural style should influence your color choice. Traditional and Mediterranean-style homes common throughout Highland Park and University Park often look best with warm, classic tones like limestone or travertine colors. Contemporary homes in newer developments benefit from cleaner, more neutral tones in grays and whites.' }] },
      { _type: 'block', _key: 'b11', style: 'h2', children: [{ _type: 'span', _key: 's11', text: "Don't Forget About Contrast" }] },
      { _type: 'block', _key: 'b12', style: 'normal', children: [{ _type: 'span', _key: 's12', text: 'Sometimes the most striking fireplace designs come from intentional contrast. A dark-toned cast stone surround against light walls creates a bold focal point. Conversely, a light cast stone against a darker accent wall provides an elegant, sophisticated look. The key is to be intentional about your contrast rather than letting it happen accidentally.' }] },
      { _type: 'block', _key: 'b13', style: 'h2', children: [{ _type: 'span', _key: 's13', text: 'Request Samples from CAST Design Fireplaces' }] },
      { _type: 'block', _key: 'b14', style: 'normal', children: [{ _type: 'span', _key: 's14', text: 'The best way to ensure you choose the right color is to see and feel it in person. CAST Design Fireplaces offers color samples that you can take home and compare against your existing decor. Our team provides expert guidance based on decades of experience helping homeowners throughout the DFW area find their perfect match. Contact us today to request samples and start planning your dream fireplace.' }] },
    ],
  },
  {
    _type: 'post',
    _id: 'post-trending-cast-stone-fireplace-designs-2026',
    title: '5 Trending Cast Stone Fireplace Designs for 2026',
    slug: { _type: 'slug', current: 'trending-cast-stone-fireplace-designs-2026' },
    excerpt: 'Discover the top 5 cast stone fireplace design trends shaping Dallas homes in 2026, from minimalist linear surrounds to bold statement mantels.',
    category: 'Design Trends',
    readTime: '5 min read',
    publishedAt: '2025-01-15T00:00:00Z',
    body: [
      { _type: 'block', _key: 'b1', style: 'h2', children: [{ _type: 'span', _key: 's1', text: 'The Hottest Cast Stone Fireplace Trends Defining 2026' }] },
      { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'The fireplace serves as the heart of the home, and cast stone designs in 2026 are pushing the boundaries of what\'s possible. Whether you\'re building a new home in the Dallas-Fort Worth area or planning a remodel, understanding current design trends will help ensure your fireplace remains a stunning focal point for years to come. At CAST Design Fireplaces, we\'ve identified five trending styles that our clients are requesting most often.' }] },
      { _type: 'block', _key: 'b3', style: 'h2', children: [{ _type: 'span', _key: 's3', text: '1. Oversized Linear Surrounds' }] },
      { _type: 'block', _key: 'b4', style: 'normal', children: [{ _type: 'span', _key: 's4', text: 'The days of the standard-sized fireplace are numbered. Today\'s homeowners are increasingly requesting expansive linear cast stone surrounds that span an entire wall, creating a dramatic visual impact while still delivering the warmth and texture that cast stone is known for. The horizontal format pairs beautifully with the open-concept floor plans popular in new Dallas-area construction. These oversized surrounds work equally well with gas and electric inserts, giving homeowners flexibility without sacrificing the look.' }] },
      { _type: 'block', _key: 'b5', style: 'h2', children: [{ _type: 'span', _key: 's5', text: '2. Textured and Layered Stone Finishes' }] },
      { _type: 'block', _key: 'b6', style: 'normal', children: [{ _type: 'span', _key: 's6', text: 'Smooth, polished surfaces are giving way to organic, textured finishes that mimic the look of hand-carved limestone or aged travertine. This approach adds depth and character to a fireplace, making it feel simultaneously luxurious and welcoming. At CAST Design, we offer a range of customizable textured finishes that can be tailored to your preferences, from warm creams to cool grays.' }] },
      { _type: 'block', _key: 'b7', style: 'h2', children: [{ _type: 'span', _key: 's7', text: '3. Floor-to-Ceiling Cast Stone Installations' }] },
      { _type: 'block', _key: 'b8', style: 'normal', children: [{ _type: 'span', _key: 's8', text: 'More homeowners want their fireplace to serve as a true architectural focal point. Floor-to-ceiling cast stone installations that run from the hearth all the way up to the ceiling create an undeniable sense of grandeur and importance. This design choice works particularly well in homes with high ceilings, which are common in newer communities like Frisco, Prosper, and Southlake.' }] },
      { _type: 'block', _key: 'b9', style: 'h2', children: [{ _type: 'span', _key: 's9', text: '4. Minimalist Mantels with Clean Lines' }] },
      { _type: 'block', _key: 'b10', style: 'normal', children: [{ _type: 'span', _key: 's10', text: 'While ornate, traditional mantels will always have their place, there\'s been a significant uptick in demand for minimalist cast stone mantels in 2026. These designs feature clean, simple lines without excessive ornamentation, letting the beauty of the material itself take center stage. Floating shelf-style mantels are particularly popular in modern and transitional interiors, though they\'ve proven versatile enough to work in farmhouse and contemporary settings as well.' }] },
      { _type: 'block', _key: 'b11', style: 'h2', children: [{ _type: 'span', _key: 's11', text: '5. Warm-Toned Cast Stone in Earth Palettes' }] },
      { _type: 'block', _key: 'b12', style: 'normal', children: [{ _type: 'span', _key: 's12', text: 'After years of cool grays and whites dominating the design conversation, 2026 is seeing a shift toward warmer, more earthy tones. Think warm sand, honey, terracotta, and soft taupe—shades that create an inviting, grounded atmosphere. These earth palettes feel connected to nature and the outdoors, a philosophy that resonates strongly throughout the Texas market. At CAST Design, we can match virtually any color specification you have in mind.' }] },
    ],
  },
  {
    _type: 'post',
    _id: 'post-cast-stone-fireplace-hearths-flushed-vs-raised',
    title: 'Cast Stone Fireplace Hearths: Flushed vs. Raised – Which is Right for You?',
    slug: { _type: 'slug', current: 'cast-stone-fireplace-hearths-flushed-vs-raised---which-is-right-for-you' },
    excerpt: 'Discover the pros and cons of flush vs. raised cast stone fireplace hearths, and learn how to choose the best option for your home with insights from CAST Design Fireplaces.',
    category: 'Home Design',
    readTime: '4 min read',
    publishedAt: '2024-10-15T00:00:00Z',
    body: [
      { _type: 'block', _key: 'b1', style: 'h2', children: [{ _type: 'span', _key: 's1', text: 'Understanding the Flush Cast Stone Fireplace Hearth' }] },
      { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'A flush hearth sits level with the surrounding flooring, creating a seamless transition that works particularly well in contemporary or minimalist interiors. Because it doesn\'t protrude into the room, a flush hearth helps the space feel more open and uninterrupted.' }] },
      { _type: 'block', _key: 'b3', style: 'h2', children: [{ _type: 'span', _key: 's3', text: 'Benefits of a Flush Hearth' }] },
      { _type: 'block', _key: 'b4', style: 'normal', children: [{ _type: 'span', _key: 's4', text: 'Modern aesthetics: The clean, uninterrupted lines complement minimalist and contemporary interiors beautifully. Space efficiency: Without a raised platform protruding into the room, the space feels more open, which is ideal for smaller living areas. Safety and accessibility: There\'s no raised edge to trip over, making it a safer option for households with young children, elderly family members, or pets.' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'One consideration with flush hearths: they may be less effective at containing embers or ash if you\'re using a wood-burning fireplace.' }] },
      { _type: 'block', _key: 'b6', style: 'h2', children: [{ _type: 'span', _key: 's6', text: 'Exploring the Raised Cast Stone Fireplace Hearth' }] },
      { _type: 'block', _key: 'b7', style: 'normal', children: [{ _type: 'span', _key: 's7', text: 'A raised hearth extends several inches or even a foot or more above floor level. This style is often associated with traditional, rustic, or craftsman-style homes, though it can be incorporated into a variety of design aesthetics depending on how it\'s executed.' }] },
      { _type: 'block', _key: 'b8', style: 'h2', children: [{ _type: 'span', _key: 's8', text: 'Benefits of a Raised Hearth' }] },
      { _type: 'block', _key: 'b9', style: 'normal', children: [{ _type: 'span', _key: 's9', text: 'Design presence: A raised hearth adds architectural interest, creating a natural focal point that shows off the texture and color of the cast stone. Functional seating: An extended raised hearth can serve as a casual seating ledge during gatherings. Better ash containment: The physical barrier helps prevent embers and ash from reaching your flooring when using a wood-burning fireplace.' }] },
      { _type: 'block', _key: 'b10', style: 'normal', children: [{ _type: 'span', _key: 's10', text: 'The tradeoff is that a raised hearth can make a room feel slightly smaller and may present a trip hazard in open floor plans with high foot traffic.' }] },
      { _type: 'block', _key: 'b11', style: 'h2', children: [{ _type: 'span', _key: 's11', text: 'Which Hearth Style is Right for You?' }] },
      { _type: 'block', _key: 'b12', style: 'normal', children: [{ _type: 'span', _key: 's12', text: 'The right choice depends on a combination of factors: your aesthetic preferences, how the room is used, and the type of fireplace insert you\'re installing. Modern and contemporary homes tend to favor flush hearths for their seamless integration. Traditional, rustic, or craftsman-style homes often feel more at home with a raised hearth. If you have a wood-burning fireplace and are concerned about ash containment, a raised hearth offers a practical advantage. For households prioritizing accessibility and safety, a flush hearth is usually the better option.' }] },
      { _type: 'block', _key: 'b13', style: 'h2', children: [{ _type: 'span', _key: 's13', text: 'Care and Maintenance Tips for Your Cast Stone Hearth' }] },
      { _type: 'block', _key: 'b14', style: 'normal', children: [{ _type: 'span', _key: 's14', text: 'Regardless of which style you choose, maintaining your cast stone hearth is straightforward. Regular dusting and occasional wiping with a damp cloth keeps the surface looking fresh. Avoid harsh chemical cleaners—stick to mild, stone-safe products. For wood-burning fireplaces, clean up ash and soot promptly to prevent staining. Inspect the hearth annually for any signs of cracking or wear.' }] },
    ],
  },
  {
    _type: 'post',
    _id: 'post-why-cast-stone-is-better-choice-fireplace-mantel',
    title: 'Why Cast Stone is a Better Choice for a Fireplace Mantel',
    slug: { _type: 'slug', current: 'why-cast-stone-is-a-better-choice-for-a-fireplace-mantel' },
    excerpt: 'Choosing the right material for a fireplace mantel involves balancing aesthetics, functionality, and cost. Here\'s why cast stone consistently comes out on top.',
    category: 'Product Guide',
    readTime: '6 min read',
    publishedAt: '2024-08-01T00:00:00Z',
    body: [
      { _type: 'block', _key: 'b1', style: 'h2', children: [{ _type: 'span', _key: 's1', text: 'What is Cast Stone?' }] },
      { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'Cast stone is a refined architectural precast concrete designed to simulate natural cut stone. Made from a mixture of natural stone aggregates, cement, and coloring agents poured into molds, cast stone delivers the beauty and elegance of natural stone while offering additional advantages in terms of cost, weight, and versatility.' }] },
      { _type: 'block', _key: 'b3', style: 'h2', children: [{ _type: 'span', _key: 's3', text: 'Durability and Longevity' }] },
      { _type: 'block', _key: 'b4', style: 'normal', children: [{ _type: 'span', _key: 's4', text: 'Cast stone is exceptionally durable, particularly in fireplace applications. It resists heat, moisture, and the kind of environmental wear that causes other materials to degrade over time.' }] },
      { _type: 'block', _key: 'b5', style: 'h2', children: [{ _type: 'span', _key: 's5', text: 'Heat Resistance' }] },
      { _type: 'block', _key: 'b6', style: 'normal', children: [{ _type: 'span', _key: 's6', text: 'Unlike wood or certain synthetic materials, cast stone can withstand the high temperatures generated by a fireplace without cracking, warping, or deteriorating over time.' }] },
      { _type: 'block', _key: 'b7', style: 'h2', children: [{ _type: 'span', _key: 's7', text: 'Low Maintenance' }] },
      { _type: 'block', _key: 'b8', style: 'normal', children: [{ _type: 'span', _key: 's8', text: 'Unlike wood, which requires regular painting, sealing, or staining, cast stone mantels require minimal upkeep. A simple wipe-down with a damp cloth is usually all it takes to keep a cast stone mantel looking its best for years.' }] },
      { _type: 'block', _key: 'b9', style: 'h2', children: [{ _type: 'span', _key: 's9', text: 'Aesthetic Versatility' }] },
      { _type: 'block', _key: 'b10', style: 'normal', children: [{ _type: 'span', _key: 's10', text: 'One of cast stone\'s greatest strengths is its ability to be molded into virtually any shape and finished to mimic a wide range of natural materials.' }] },
      { _type: 'block', _key: 'b11', style: 'h2', children: [{ _type: 'span', _key: 's11', text: 'Wide Range of Finishes' }] },
      { _type: 'block', _key: 'b12', style: 'normal', children: [{ _type: 'span', _key: 's12', text: 'Cast stone can replicate the look of limestone, travertine, sandstone, and even marble, giving homeowners the ability to match virtually any interior design style.' }] },
      { _type: 'block', _key: 'b13', style: 'h2', children: [{ _type: 'span', _key: 's13', text: 'Customization Options' }] },
      { _type: 'block', _key: 'b14', style: 'normal', children: [{ _type: 'span', _key: 's14', text: 'Whether you want intricate carvings, classical columns, or a sleek, modern profile, cast stone can be custom-crafted to meet your exact specifications—something that\'s much harder to achieve with natural stone.' }] },
      { _type: 'block', _key: 'b15', style: 'h2', children: [{ _type: 'span', _key: 's15', text: 'Cost-Effectiveness' }] },
      { _type: 'block', _key: 'b16', style: 'normal', children: [{ _type: 'span', _key: 's16', text: 'Cast stone consistently delivers a better value proposition than natural stone, especially when you factor in both material and installation costs.' }] },
      { _type: 'block', _key: 'b17', style: 'h2', children: [{ _type: 'span', _key: 's17', text: 'Lower Material Costs' }] },
      { _type: 'block', _key: 'b18', style: 'normal', children: [{ _type: 'span', _key: 's18', text: 'Manufacturing cast stone is far more efficient than quarrying natural stone, which translates to significantly lower material costs.' }] },
      { _type: 'block', _key: 'b19', style: 'h2', children: [{ _type: 'span', _key: 's19', text: 'Reduced Installation Costs' }] },
      { _type: 'block', _key: 'b20', style: 'normal', children: [{ _type: 'span', _key: 's20', text: 'Cast stone is lighter than natural stone, which means it\'s easier to handle and typically requires less structural reinforcement. This can translate to lower labor costs and faster installation timelines.' }] },
      { _type: 'block', _key: 'b21', style: 'h2', children: [{ _type: 'span', _key: 's21', text: 'Cast Stone vs. Wood Mantels' }] },
      { _type: 'block', _key: 'b22', style: 'normal', children: [{ _type: 'span', _key: 's22', text: 'Wood mantels are combustible, which presents a genuine safety concern near open flames. Cast stone is completely non-combustible, making it a safer choice for fireplace surrounds. Wood is also susceptible to warping, cracking, and insect damage over time—none of which are concerns with cast stone.' }] },
      { _type: 'block', _key: 'b23', style: 'h2', children: [{ _type: 'span', _key: 's23', text: 'Cast Stone vs. Metal Mantels' }] },
      { _type: 'block', _key: 'b24', style: 'normal', children: [{ _type: 'span', _key: 's24', text: 'Metal mantels can work well in industrial or ultra-modern settings, but they lack the warmth and design versatility of cast stone. Metal also conducts heat efficiently, which means the surface can become uncomfortably hot during use—a concern that doesn\'t apply to cast stone.' }] },
      { _type: 'block', _key: 'b25', style: 'h2', children: [{ _type: 'span', _key: 's25', text: 'Cast Stone vs. Natural Stone Mantels' }] },
      { _type: 'block', _key: 'b26', style: 'normal', children: [{ _type: 'span', _key: 's26', text: 'Natural stone is beautiful, but it\'s heavy, expensive, and requires skilled labor to install properly. Cast stone delivers the same aesthetic appeal at a fraction of the cost, with lighter weight that simplifies installation considerably. The visual result is virtually indistinguishable to the untrained eye.' }] },
      { _type: 'block', _key: 'b27', style: 'h2', children: [{ _type: 'span', _key: 's27', text: 'Conclusion' }] },
      { _type: 'block', _key: 'b28', style: 'normal', children: [{ _type: 'span', _key: 's28', text: 'When it comes to fireplace mantels, cast stone offers the ideal combination of beauty, practicality, and value. Its durability, design versatility, cost-effectiveness, and environmental advantages make it a compelling choice for homeowners across the design spectrum—whether you\'re drawn to classic elegance or contemporary minimalism.' }] },
    ],
  },
];

async function importPosts() {
  console.log(`Importing ${posts.length} blog posts to Sanity...`);

  for (const post of posts) {
    try {
      const result = await client.createOrReplace(post);
      console.log(`✓ Imported: "${post.title}" (${result._id})`);
    } catch (err) {
      console.error(`✗ Failed: "${post.title}"`, err.message);
    }
  }

  console.log('\nDone! Posts imported successfully.');
}

importPosts();
