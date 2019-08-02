export default function (doc) {
	if (doc.isBroken) {
	  return '/not-found';
	}

	if (doc.type === 'home') {
	  return '/';
	}

	if (doc.type === 'blog_posts') {
	  return '/blog/' + doc.uid;
	}

	return '/not-found';
 };
