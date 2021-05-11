import _ from 'lodash'

export const hasSelected = (selectedObjects, objectId) => _.find(selectedObjects, objectId) && !_.isEmpty(_.find(selectedObjects, objectId)[objectId])
