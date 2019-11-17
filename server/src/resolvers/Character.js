function createdBy(parent, args, context) {
  return context.prisma.character({ id: parent.id }).createdBy()
}

module.exports = {
  createdBy
}
