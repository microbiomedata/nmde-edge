import React from 'react';

const UserProfile = React.lazy(() => import('./common/UM/User/Profile'));
const UserProjects = React.lazy(() => import('./common/UM/User/Projects'));
const UserAllProjects = React.lazy(() => import('./common/UM/User/AllProjects'));
const UserProjectPage = React.lazy(() => import('./pipelines/Common/Results/ProjectPage/User'));
const UserUploadfiles = React.lazy(() => import('./common/UM/User/Uploadfiles'));
const UserFiles = React.lazy(() => import('./common/UM/User/Files'));
const UserJobQueue = React.lazy(() => import('./common/UM/User/JobQueue'));
const AdminUsers = React.lazy(() => import('./common/UM/Admin/Users'));
const AdminFiles = React.lazy(() => import('./common/UM/Admin/Files'));
const AdminProjects = React.lazy(() => import('./common/UM/Admin/Projects'));
const AdminProjectPage = React.lazy(() => import('./pipelines/Common/Results/ProjectPage/Admin'));

const MetaGWorkflow = React.lazy(() => import('./pipelines/MetaG/Workflow/Main'));
const MetaGPipeline = React.lazy(() => import('./pipelines/MetaG/Pipeline/Main'));

const MetaTWorkflow = React.lazy(() => import('./pipelines/MetaT/Workflow/Main'));
const OrganicMWorkflow = React.lazy(() => import('./pipelines/OrganicM/Workflow/Main'));
const VirusWorkflow = React.lazy(() => import('./pipelines/Virus/Workflow/Main'));

const MetaPWorkflow = React.lazy(() => import('./pipelines/MetaP/Workflow/Main'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const privateRoutes = [
  { path: '/user/profile', exact: true, name: 'Profile', component: UserProfile },
  { path: '/user/projectlist', exact: true, name: 'Projects', component: UserProjects },
  { path: '/user/allprojectlist', exact: true, name: 'AllProjects', component: UserAllProjects },
  { path: '/user/project', name: 'ProjectPage', component: UserProjectPage },
  { path: '/user/uploadfiles', name: 'Uploadfiles', component: UserUploadfiles },
  { path: '/user/files', name: 'Userfiles', component: UserFiles },
  { path: '/user/jobqueue', name: 'JobQueue', component: UserJobQueue },
  { path: '/admin/userlist', name: 'Users', component: AdminUsers },
  { path: '/admin/filelist', name: 'Files', component: AdminFiles },
  { path: '/admin/projectlist', exact: true, name: 'AdminProjects', component: AdminProjects },
  { path: '/admin/project', name: 'AdminProjectPage', component: AdminProjectPage },

  { path: '/metag/workflow', name: 'MetaGW', component: MetaGWorkflow },
  { path: '/metag/pipeline', name: 'MetaGP', component: MetaGPipeline },

  { path: '/metat/workflow', name: 'MetaT', component: MetaTWorkflow },

  { path: '/organicm/workflow', name: 'Organic', component: OrganicMWorkflow },

  { path: '/virus_plasmid/workflow', name: 'Virus', component: VirusWorkflow },

  { path: '/metap/workflow', name: 'MetaP', component: MetaPWorkflow },

];

export default privateRoutes;