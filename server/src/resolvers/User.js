function campaigns(parent, args, context) {
  return context.prisma.user({ id: parent.id }).campaigns()
}

function posts(parent, args, context) {
  return context.prisma.user({ id: parent.id }).posts()
}

function characters(parent, args, context) {
  return context.prisma.user({ id: parent.id }).characters()
}

module.exports = {
  campaigns,
  posts,
  characters
}
