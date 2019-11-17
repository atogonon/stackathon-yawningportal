function createdBy(parent, args, context) {
  return context.prisma.campaign({ id: parent.id }).createdBy()
}

function posts(parent, args, context) {
  return context.prisma.campaign({ id: parent.id }).posts()
}

module.exports = {
  createdBy,
  posts
}
