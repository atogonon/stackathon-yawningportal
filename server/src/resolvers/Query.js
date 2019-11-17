function campaigns(parent, args, context, info) {
  return context.prisma.campaigns()
}

function posts(parent, args, context, info) {
  return context.prisma.posts()
}

function characters(parent, args, context, info) {
  return context.prisma.characters()
}

module.exports = {
  campaigns,
  posts,
  characters
}
