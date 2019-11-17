function newCampaignSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.campaign({ mutation_in: ['CREATED'] }).node()
}

const newCampaign = {
  subscribe: newCampaignSubscribe,
  resolve: payload => {
    return payload
  },
}

function newPostSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.post({ mutation_in: ['CREATED'] }).node()
}

const newPost = {
  subscribe: newPostSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newCampaign,
  newPost
}
