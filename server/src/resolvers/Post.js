// function campaign(parent, args, context) {
//   return context.prisma.post({ id: parent.id }).campaign()
// }

function postedBy(parent, args, context) {
  return context.prisma.post({ id: parent.id }).postedBy()
}

module.exports = {
  // campaign,
  postedBy,
}
