const { getUserId } = require('../utils')

function campaigns(parent, args, context, info) {
  return context.prisma.campaigns()
}

function getCampaign(parent, args, context, info) {
  return context.prisma.campaign(args)
}

function posts(parent, args, context, info) {
  return context.prisma.posts()
}

function characters(parent, args, context, info) {
  return context.prisma.characters()
}

function getMe(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.user({id: userId})
}

module.exports = {
  campaigns,
  getCampaign,
  posts,
  characters,
  getMe
}
