import * as Types from './types';

import { useMutation, useQuery, useInfiniteQuery, UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { fetcher } from '../fetcher';

export const ChangePasswordForWorkerDocument = `
    mutation changePasswordForWorker($oldPassword: String, $password: String!, $passwordConfirmation: String!) {
  changePasswordForWorker(
    oldPassword: $oldPassword
    password: $password
    passwordConfirmation: $passwordConfirmation
  ) {
    success
  }
}
    `;
export const useChangePasswordForWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ChangePasswordForWorkerMutation, TError, Types.ChangePasswordForWorkerMutationVariables, TContext>) =>
    useMutation<Types.ChangePasswordForWorkerMutation, TError, Types.ChangePasswordForWorkerMutationVariables, TContext>(
      ['changePasswordForWorker'],
      (variables?: Types.ChangePasswordForWorkerMutationVariables) => fetcher<Types.ChangePasswordForWorkerMutation, Types.ChangePasswordForWorkerMutationVariables>(ChangePasswordForWorkerDocument, variables)(),
      options
    );
useChangePasswordForWorkerMutation.getKey = () => ['changePasswordForWorker'];

useChangePasswordForWorkerMutation.fetcher = (variables: Types.ChangePasswordForWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ChangePasswordForWorkerMutation, Types.ChangePasswordForWorkerMutationVariables>(ChangePasswordForWorkerDocument, variables, options);
export const CreateIntegrationWorkerDocument = `
    mutation createIntegrationWorker($email: String!, $firstName: String!, $lastName: String!, $noSms: Boolean, $password: String!, $passwordConfirmation: String!, $phone: String!, $recaptchaToken: String, $referrerCode: String, $socialAuthenticationId: String, $source: SignupSourceEnum) {
  createIntegrationWorker(
    email: $email
    firstName: $firstName
    lastName: $lastName
    noSms: $noSms
    password: $password
    passwordConfirmation: $passwordConfirmation
    phone: $phone
    recaptchaToken: $recaptchaToken
    referrerCode: $referrerCode
    socialAuthenticationId: $socialAuthenticationId
    source: $source
  ) {
    authToken
    notificationChannel
    worker {
      agreedToTerms
      availableStartDate
      changePasswordRequired
      completedJobsNumber
      email
      facilityTypes
      firstName
      id
      jobCategoriesWorkedNumber
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      overallRating
      phone
      phoneVerifiedAt
      referralCode
      referralMethod
      referrerCode
      shiftRequested
      timeOffRequested
      workAuthorized
    }
  }
}
    `;
export const useCreateIntegrationWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateIntegrationWorkerMutation, TError, Types.CreateIntegrationWorkerMutationVariables, TContext>) =>
    useMutation<Types.CreateIntegrationWorkerMutation, TError, Types.CreateIntegrationWorkerMutationVariables, TContext>(
      ['createIntegrationWorker'],
      (variables?: Types.CreateIntegrationWorkerMutationVariables) => fetcher<Types.CreateIntegrationWorkerMutation, Types.CreateIntegrationWorkerMutationVariables>(CreateIntegrationWorkerDocument, variables)(),
      options
    );
useCreateIntegrationWorkerMutation.getKey = () => ['createIntegrationWorker'];

useCreateIntegrationWorkerMutation.fetcher = (variables: Types.CreateIntegrationWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateIntegrationWorkerMutation, Types.CreateIntegrationWorkerMutationVariables>(CreateIntegrationWorkerDocument, variables, options);
export const CreateWorkerEducationDocument = `
    mutation createWorkerEducation($_destroy: Boolean, $city: String, $country: String, $degreeDate: ISO8601Date, $degreeName: String, $major: String, $schoolName: String, $state: String) {
  createWorkerEducation(
    _destroy: $_destroy
    city: $city
    country: $country
    degreeDate: $degreeDate
    degreeName: $degreeName
    major: $major
    schoolName: $schoolName
    state: $state
  ) {
    city
    country
    createdAt
    degreeDate
    degreeName
    id
    major
    schoolName
    state
    worker {
      agreedToTerms
      availableStartDate
      changePasswordRequired
      completedJobsNumber
      email
      facilityTypes
      firstName
      id
      jobCategoriesWorkedNumber
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      overallRating
      phone
      phoneVerifiedAt
      referralCode
      referralMethod
      referrerCode
      shiftRequested
      timeOffRequested
      workAuthorized
    }
  }
}
    `;
export const useCreateWorkerEducationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateWorkerEducationMutation, TError, Types.CreateWorkerEducationMutationVariables, TContext>) =>
    useMutation<Types.CreateWorkerEducationMutation, TError, Types.CreateWorkerEducationMutationVariables, TContext>(
      ['createWorkerEducation'],
      (variables?: Types.CreateWorkerEducationMutationVariables) => fetcher<Types.CreateWorkerEducationMutation, Types.CreateWorkerEducationMutationVariables>(CreateWorkerEducationDocument, variables)(),
      options
    );
useCreateWorkerEducationMutation.getKey = () => ['createWorkerEducation'];

useCreateWorkerEducationMutation.fetcher = (variables?: Types.CreateWorkerEducationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateWorkerEducationMutation, Types.CreateWorkerEducationMutationVariables>(CreateWorkerEducationDocument, variables, options);
export const DestroyWorkerEducationDocument = `
    mutation destroyWorkerEducation($id: String!) {
  destroyWorkerEducation(id: $id) {
    id
    success
  }
}
    `;
export const useDestroyWorkerEducationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyWorkerEducationMutation, TError, Types.DestroyWorkerEducationMutationVariables, TContext>) =>
    useMutation<Types.DestroyWorkerEducationMutation, TError, Types.DestroyWorkerEducationMutationVariables, TContext>(
      ['destroyWorkerEducation'],
      (variables?: Types.DestroyWorkerEducationMutationVariables) => fetcher<Types.DestroyWorkerEducationMutation, Types.DestroyWorkerEducationMutationVariables>(DestroyWorkerEducationDocument, variables)(),
      options
    );
useDestroyWorkerEducationMutation.getKey = () => ['destroyWorkerEducation'];

useDestroyWorkerEducationMutation.fetcher = (variables: Types.DestroyWorkerEducationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyWorkerEducationMutation, Types.DestroyWorkerEducationMutationVariables>(DestroyWorkerEducationDocument, variables, options);
export const ResetPasswordForWorkerDocument = `
    mutation resetPasswordForWorker($password: String!, $passwordConfirmation: String!, $recaptchaToken: String, $token: String!, $userTokenId: String!) {
  resetPasswordForWorker(
    password: $password
    passwordConfirmation: $passwordConfirmation
    recaptchaToken: $recaptchaToken
    token: $token
    userTokenId: $userTokenId
  ) {
    success
  }
}
    `;
export const useResetPasswordForWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ResetPasswordForWorkerMutation, TError, Types.ResetPasswordForWorkerMutationVariables, TContext>) =>
    useMutation<Types.ResetPasswordForWorkerMutation, TError, Types.ResetPasswordForWorkerMutationVariables, TContext>(
      ['resetPasswordForWorker'],
      (variables?: Types.ResetPasswordForWorkerMutationVariables) => fetcher<Types.ResetPasswordForWorkerMutation, Types.ResetPasswordForWorkerMutationVariables>(ResetPasswordForWorkerDocument, variables)(),
      options
    );
useResetPasswordForWorkerMutation.getKey = () => ['resetPasswordForWorker'];

useResetPasswordForWorkerMutation.fetcher = (variables: Types.ResetPasswordForWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ResetPasswordForWorkerMutation, Types.ResetPasswordForWorkerMutationVariables>(ResetPasswordForWorkerDocument, variables, options);
export const SendPasswordResetWorkerDocument = `
    mutation sendPasswordResetWorker($email: String!) {
  sendPasswordResetWorker(email: $email) {
    userTokenId
  }
}
    `;
export const useSendPasswordResetWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SendPasswordResetWorkerMutation, TError, Types.SendPasswordResetWorkerMutationVariables, TContext>) =>
    useMutation<Types.SendPasswordResetWorkerMutation, TError, Types.SendPasswordResetWorkerMutationVariables, TContext>(
      ['sendPasswordResetWorker'],
      (variables?: Types.SendPasswordResetWorkerMutationVariables) => fetcher<Types.SendPasswordResetWorkerMutation, Types.SendPasswordResetWorkerMutationVariables>(SendPasswordResetWorkerDocument, variables)(),
      options
    );
useSendPasswordResetWorkerMutation.getKey = () => ['sendPasswordResetWorker'];

useSendPasswordResetWorkerMutation.fetcher = (variables: Types.SendPasswordResetWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SendPasswordResetWorkerMutation, Types.SendPasswordResetWorkerMutationVariables>(SendPasswordResetWorkerDocument, variables, options);
export const SignInWorkerDocument = `
    mutation signInWorker($email: String!, $password: String!, $recaptchaToken: String, $socialAuthenticationId: String) {
  signInWorker(
    email: $email
    password: $password
    recaptchaToken: $recaptchaToken
    socialAuthenticationId: $socialAuthenticationId
  ) {
    authToken
    notificationChannel
    worker {
      agreedToTerms
      availableStartDate
      changePasswordRequired
      completedJobsNumber
      email
      facilityTypes
      firstName
      id
      jobCategoriesWorkedNumber
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      overallRating
      phone
      phoneVerifiedAt
      referralCode
      referralMethod
      referrerCode
      shiftRequested
      timeOffRequested
      workAuthorized
    }
  }
}
    `;
export const useSignInWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SignInWorkerMutation, TError, Types.SignInWorkerMutationVariables, TContext>) =>
    useMutation<Types.SignInWorkerMutation, TError, Types.SignInWorkerMutationVariables, TContext>(
      ['signInWorker'],
      (variables?: Types.SignInWorkerMutationVariables) => fetcher<Types.SignInWorkerMutation, Types.SignInWorkerMutationVariables>(SignInWorkerDocument, variables)(),
      options
    );
useSignInWorkerMutation.getKey = () => ['signInWorker'];

useSignInWorkerMutation.fetcher = (variables: Types.SignInWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SignInWorkerMutation, Types.SignInWorkerMutationVariables>(SignInWorkerDocument, variables, options);
export const SignOutWorkerDocument = `
    mutation signOutWorker {
  signOutWorker {
    success
  }
}
    `;
export const useSignOutWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SignOutWorkerMutation, TError, Types.SignOutWorkerMutationVariables, TContext>) =>
    useMutation<Types.SignOutWorkerMutation, TError, Types.SignOutWorkerMutationVariables, TContext>(
      ['signOutWorker'],
      (variables?: Types.SignOutWorkerMutationVariables) => fetcher<Types.SignOutWorkerMutation, Types.SignOutWorkerMutationVariables>(SignOutWorkerDocument, variables)(),
      options
    );
useSignOutWorkerMutation.getKey = () => ['signOutWorker'];

useSignOutWorkerMutation.fetcher = (variables?: Types.SignOutWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SignOutWorkerMutation, Types.SignOutWorkerMutationVariables>(SignOutWorkerDocument, variables, options);
export const UpdateWorkerEducationDocument = `
    mutation updateWorkerEducation($_destroy: Boolean, $city: String, $country: String, $degreeDate: ISO8601Date, $degreeName: String, $id: String!, $major: String, $schoolName: String, $state: String) {
  updateWorkerEducation(
    _destroy: $_destroy
    city: $city
    country: $country
    degreeDate: $degreeDate
    degreeName: $degreeName
    id: $id
    major: $major
    schoolName: $schoolName
    state: $state
  ) {
    city
    country
    createdAt
    degreeDate
    degreeName
    id
    major
    schoolName
    state
    worker {
      agreedToTerms
      availableStartDate
      changePasswordRequired
      completedJobsNumber
      email
      facilityTypes
      firstName
      id
      jobCategoriesWorkedNumber
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      overallRating
      phone
      phoneVerifiedAt
      referralCode
      referralMethod
      referrerCode
      shiftRequested
      timeOffRequested
      workAuthorized
    }
  }
}
    `;
export const useUpdateWorkerEducationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateWorkerEducationMutation, TError, Types.UpdateWorkerEducationMutationVariables, TContext>) =>
    useMutation<Types.UpdateWorkerEducationMutation, TError, Types.UpdateWorkerEducationMutationVariables, TContext>(
      ['updateWorkerEducation'],
      (variables?: Types.UpdateWorkerEducationMutationVariables) => fetcher<Types.UpdateWorkerEducationMutation, Types.UpdateWorkerEducationMutationVariables>(UpdateWorkerEducationDocument, variables)(),
      options
    );
useUpdateWorkerEducationMutation.getKey = () => ['updateWorkerEducation'];

useUpdateWorkerEducationMutation.fetcher = (variables: Types.UpdateWorkerEducationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateWorkerEducationMutation, Types.UpdateWorkerEducationMutationVariables>(UpdateWorkerEducationDocument, variables, options);
export const AppInitDocument = `
    query appInit {
  appInit {
    chatIntegrationSetting {
      active
      configuration
      provider
    }
    company {
      address
      addressState
      city
      country
      description
      id
      logoUrl
      mainContactEmail
      mainContactName
      name
      phone
      zip
    }
    companyConfig {
      adpUrl
      benefitUrls
      companyId
      contactSupportUrl
      defaultLocationImageMobileUrl
      defaultLocationImageThumbnailUrl
      defaultLocationImageWebUrl
      distanceUnit
      enableClickTracking
      enableScreenTracking
      facebookUrl
      faqsUrl
      id
      instagramUrl
      linkedInUrl
      linkedinRedirectUrl
      messagingServiceSender
      mobileOpusPolicies
      oneSignalAppId
      privacyPoblicyUrl
      privacyPolicyContent
      referalRewardContent
      reportBugsUrl
      termUrl
      twitterUrl
      usingModules
      webOpusPolicies
      webPortalUrl
      youtubeUrl
    }
    masterData
    worker {
      agreedToTerms
      availableStartDate
      changePasswordRequired
      completedJobsNumber
      email
      facilityTypes
      firstName
      id
      jobCategoriesWorkedNumber
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      overallRating
      phone
      phoneVerifiedAt
      referralCode
      referralMethod
      referrerCode
      shiftRequested
      timeOffRequested
      workAuthorized
    }
    workerOnboarding {
      companyOnboardingId
      currentPartIndex
      id
      message
      percentageCompleted
      permittedEvents
      state
    }
  }
}
    `;
export const useAppInitQuery = <
      TData = Types.AppInitQuery,
      TError = unknown
    >(
      variables?: Types.AppInitQueryVariables,
      options?: UseQueryOptions<Types.AppInitQuery, TError, TData>
    ) =>
    useQuery<Types.AppInitQuery, TError, TData>(
      variables === undefined ? ['appInit'] : ['appInit', variables],
      fetcher<Types.AppInitQuery, Types.AppInitQueryVariables>(AppInitDocument, variables),
      options
    );

useAppInitQuery.getKey = (variables?: Types.AppInitQueryVariables) => variables === undefined ? ['appInit'] : ['appInit', variables];
;

export const useInfiniteAppInitQuery = <
      TData = Types.AppInitQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.AppInitQueryVariables,
      variables?: Types.AppInitQueryVariables,
      options?: UseInfiniteQueryOptions<Types.AppInitQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.AppInitQuery, TError, TData>(
      variables === undefined ? ['appInit.infinite'] : ['appInit.infinite', variables],
      (metaData) => fetcher<Types.AppInitQuery, Types.AppInitQueryVariables>(AppInitDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteAppInitQuery.getKey = (variables?: Types.AppInitQueryVariables) => variables === undefined ? ['appInit.infinite'] : ['appInit.infinite', variables];
;

useAppInitQuery.fetcher = (variables?: Types.AppInitQueryVariables, options?: RequestInit['headers']) => fetcher<Types.AppInitQuery, Types.AppInitQueryVariables>(AppInitDocument, variables, options);
export const CitiesDocument = `
    query cities($stateCode: String!) {
  cities(stateCode: $stateCode) {
    countryCode
    countryId
    id
    latitude
    longitude
    name
    stateCode
    stateId
  }
}
    `;
export const useCitiesQuery = <
      TData = Types.CitiesQuery,
      TError = unknown
    >(
      variables: Types.CitiesQueryVariables,
      options?: UseQueryOptions<Types.CitiesQuery, TError, TData>
    ) =>
    useQuery<Types.CitiesQuery, TError, TData>(
      ['cities', variables],
      fetcher<Types.CitiesQuery, Types.CitiesQueryVariables>(CitiesDocument, variables),
      options
    );

useCitiesQuery.getKey = (variables: Types.CitiesQueryVariables) => ['cities', variables];
;

export const useInfiniteCitiesQuery = <
      TData = Types.CitiesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.CitiesQueryVariables,
      variables: Types.CitiesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.CitiesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.CitiesQuery, TError, TData>(
      ['cities.infinite', variables],
      (metaData) => fetcher<Types.CitiesQuery, Types.CitiesQueryVariables>(CitiesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteCitiesQuery.getKey = (variables: Types.CitiesQueryVariables) => ['cities.infinite', variables];
;

useCitiesQuery.fetcher = (variables: Types.CitiesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.CitiesQuery, Types.CitiesQueryVariables>(CitiesDocument, variables, options);
export const JobDocument = `
    query job($id: String!) {
  job(id: $id) {
    createdAt
    createdDate
    customStartDate
    distance
    duration
    exclusiveJob
    externalCreatedAt
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hoursPerWeek
    id
    images
    jobGeneral {
      companyId
      description
      hotJob
      payCurrency
      requirements
      setting
    }
    jobType
    locationImage {
      city
      id
      state
    }
    matchingPercentage
    minWeeklyPayAmount
    shifts
    slotsNumber
    slug
    startDate
    status
    title
    updatedAt
    viewCount
    weeklyPayAmount
  }
}
    `;
export const useJobQuery = <
      TData = Types.JobQuery,
      TError = unknown
    >(
      variables: Types.JobQueryVariables,
      options?: UseQueryOptions<Types.JobQuery, TError, TData>
    ) =>
    useQuery<Types.JobQuery, TError, TData>(
      ['job', variables],
      fetcher<Types.JobQuery, Types.JobQueryVariables>(JobDocument, variables),
      options
    );

useJobQuery.getKey = (variables: Types.JobQueryVariables) => ['job', variables];
;

export const useInfiniteJobQuery = <
      TData = Types.JobQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.JobQueryVariables,
      variables: Types.JobQueryVariables,
      options?: UseInfiniteQueryOptions<Types.JobQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.JobQuery, TError, TData>(
      ['job.infinite', variables],
      (metaData) => fetcher<Types.JobQuery, Types.JobQueryVariables>(JobDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteJobQuery.getKey = (variables: Types.JobQueryVariables) => ['job.infinite', variables];
;

useJobQuery.fetcher = (variables: Types.JobQueryVariables, options?: RequestInit['headers']) => fetcher<Types.JobQuery, Types.JobQueryVariables>(JobDocument, variables, options);
export const JobSearchDocument = `
    query jobSearch($filter: JobFilter, $limit: Int, $offset: Int, $sortBy: JobManagementSort) {
  jobSearch(filter: $filter, limit: $limit, offset: $offset, sortBy: $sortBy) {
    jobs {
      createdAt
      createdDate
      customStartDate
      distance
      duration
      exclusiveJob
      externalCreatedAt
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hoursPerWeek
      id
      images
      jobType
      matchingPercentage
      minWeeklyPayAmount
      shifts
      slotsNumber
      slug
      startDate
      status
      title
      updatedAt
      viewCount
      weeklyPayAmount
    }
    totalCount
  }
}
    `;
export const useJobSearchQuery = <
      TData = Types.JobSearchQuery,
      TError = unknown
    >(
      variables?: Types.JobSearchQueryVariables,
      options?: UseQueryOptions<Types.JobSearchQuery, TError, TData>
    ) =>
    useQuery<Types.JobSearchQuery, TError, TData>(
      variables === undefined ? ['jobSearch'] : ['jobSearch', variables],
      fetcher<Types.JobSearchQuery, Types.JobSearchQueryVariables>(JobSearchDocument, variables),
      options
    );

useJobSearchQuery.getKey = (variables?: Types.JobSearchQueryVariables) => variables === undefined ? ['jobSearch'] : ['jobSearch', variables];
;

export const useInfiniteJobSearchQuery = <
      TData = Types.JobSearchQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.JobSearchQueryVariables,
      variables?: Types.JobSearchQueryVariables,
      options?: UseInfiniteQueryOptions<Types.JobSearchQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.JobSearchQuery, TError, TData>(
      variables === undefined ? ['jobSearch.infinite'] : ['jobSearch.infinite', variables],
      (metaData) => fetcher<Types.JobSearchQuery, Types.JobSearchQueryVariables>(JobSearchDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteJobSearchQuery.getKey = (variables?: Types.JobSearchQueryVariables) => variables === undefined ? ['jobSearch.infinite'] : ['jobSearch.infinite', variables];
;

useJobSearchQuery.fetcher = (variables?: Types.JobSearchQueryVariables, options?: RequestInit['headers']) => fetcher<Types.JobSearchQuery, Types.JobSearchQueryVariables>(JobSearchDocument, variables, options);
export const StatesDocument = `
    query states($countryCode: String!) {
  states(countryCode: $countryCode) {
    countryCode
    countryId
    id
    latitude
    longitude
    name
    stateCode
  }
}
    `;
export const useStatesQuery = <
      TData = Types.StatesQuery,
      TError = unknown
    >(
      variables: Types.StatesQueryVariables,
      options?: UseQueryOptions<Types.StatesQuery, TError, TData>
    ) =>
    useQuery<Types.StatesQuery, TError, TData>(
      ['states', variables],
      fetcher<Types.StatesQuery, Types.StatesQueryVariables>(StatesDocument, variables),
      options
    );

useStatesQuery.getKey = (variables: Types.StatesQueryVariables) => ['states', variables];
;

export const useInfiniteStatesQuery = <
      TData = Types.StatesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.StatesQueryVariables,
      variables: Types.StatesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.StatesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.StatesQuery, TError, TData>(
      ['states.infinite', variables],
      (metaData) => fetcher<Types.StatesQuery, Types.StatesQueryVariables>(StatesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteStatesQuery.getKey = (variables: Types.StatesQueryVariables) => ['states.infinite', variables];
;

useStatesQuery.fetcher = (variables: Types.StatesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.StatesQuery, Types.StatesQueryVariables>(StatesDocument, variables, options);
export const WorkerDocument = `
    query worker($id: String) {
  worker(id: $id) {
    agreedToTerms
    availableStartDate
    changePasswordRequired
    company {
      address
      addressState
      city
      country
      description
      id
      logoUrl
      mainContactEmail
      mainContactName
      name
      phone
      zip
    }
    completedJobsNumber
    email
    facilityTypes
    firstName
    id
    jobCategoriesWorkedNumber
    lastName
    lastOtpExpiredAt
    lastSignInAt
    locationsWorkedNumber
    maidenName
    noCall
    noEmail
    noNotification
    noSms
    notificationSetting {
      assignmentEndingReminder
      completeOnboarding
      documentExpired
      id
      jobAlert
      jobsRecommendation
      licenseExpired
      licenseExpiredOptions
      licenseWillBeExpiredOptions
      timecardSubmissionReminder
    }
    overallRating
    phone
    phoneVerifiedAt
    recruiter {
      companyId
      email
      id
      name
      phone
      title
    }
    referralCode
    referralMethod
    referrerCode
    shiftRequested
    timeOffRequested
    workAuthorized
    workExperienceOverview {
      discipline
      id
      primarySpecialty
      secondarySpecialty
      yearsOfExperience
    }
    workExperiences {
      agency
      assignmentType
      bedsInUnit
      birthsPerMonth
      chartingSoftwareUsed
      city
      country
      currentlyEmployed
      dailyCensus
      dutiesPerformed
      endDate
      facilityName
      facilityType
      floatSpecialty
      id
      mayContactSupervisor
      numberSuites
      nurseRatio
      patientRatio
      patientType
      position
      reasonForLeaving
      startDate
      state
      supervisor
      travelAssignment
      unitSpecialty
      zipcode
    }
    workedTimesheets {
      callHours
      id
      paidHours
      shiftsWorked
      status
    }
    workerAddress {
      aptNumber
      city
      country
      id
      state
      street
      workerId
      zipcode
    }
    workingPreferredLocations {
      id
      preferredWorkingCity
      preferredWorkingState
    }
  }
}
    `;
export const useWorkerQuery = <
      TData = Types.WorkerQuery,
      TError = unknown
    >(
      variables?: Types.WorkerQueryVariables,
      options?: UseQueryOptions<Types.WorkerQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerQuery, TError, TData>(
      variables === undefined ? ['worker'] : ['worker', variables],
      fetcher<Types.WorkerQuery, Types.WorkerQueryVariables>(WorkerDocument, variables),
      options
    );

useWorkerQuery.getKey = (variables?: Types.WorkerQueryVariables) => variables === undefined ? ['worker'] : ['worker', variables];
;

export const useInfiniteWorkerQuery = <
      TData = Types.WorkerQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerQueryVariables,
      variables?: Types.WorkerQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerQuery, TError, TData>(
      variables === undefined ? ['worker.infinite'] : ['worker.infinite', variables],
      (metaData) => fetcher<Types.WorkerQuery, Types.WorkerQueryVariables>(WorkerDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerQuery.getKey = (variables?: Types.WorkerQueryVariables) => variables === undefined ? ['worker.infinite'] : ['worker.infinite', variables];
;

useWorkerQuery.fetcher = (variables?: Types.WorkerQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerQuery, Types.WorkerQueryVariables>(WorkerDocument, variables, options);
export const WorkerEducationsDocument = `
    query workerEducations($workerId: String) {
  workerEducations(workerId: $workerId) {
    city
    country
    createdAt
    degreeDate
    degreeName
    id
    major
    schoolName
    state
    worker {
      agreedToTerms
      availableStartDate
      changePasswordRequired
      completedJobsNumber
      email
      facilityTypes
      firstName
      id
      jobCategoriesWorkedNumber
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      overallRating
      phone
      phoneVerifiedAt
      referralCode
      referralMethod
      referrerCode
      shiftRequested
      timeOffRequested
      workAuthorized
    }
  }
}
    `;
export const useWorkerEducationsQuery = <
      TData = Types.WorkerEducationsQuery,
      TError = unknown
    >(
      variables?: Types.WorkerEducationsQueryVariables,
      options?: UseQueryOptions<Types.WorkerEducationsQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerEducationsQuery, TError, TData>(
      variables === undefined ? ['workerEducations'] : ['workerEducations', variables],
      fetcher<Types.WorkerEducationsQuery, Types.WorkerEducationsQueryVariables>(WorkerEducationsDocument, variables),
      options
    );

useWorkerEducationsQuery.getKey = (variables?: Types.WorkerEducationsQueryVariables) => variables === undefined ? ['workerEducations'] : ['workerEducations', variables];
;

export const useInfiniteWorkerEducationsQuery = <
      TData = Types.WorkerEducationsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerEducationsQueryVariables,
      variables?: Types.WorkerEducationsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerEducationsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerEducationsQuery, TError, TData>(
      variables === undefined ? ['workerEducations.infinite'] : ['workerEducations.infinite', variables],
      (metaData) => fetcher<Types.WorkerEducationsQuery, Types.WorkerEducationsQueryVariables>(WorkerEducationsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerEducationsQuery.getKey = (variables?: Types.WorkerEducationsQueryVariables) => variables === undefined ? ['workerEducations.infinite'] : ['workerEducations.infinite', variables];
;

useWorkerEducationsQuery.fetcher = (variables?: Types.WorkerEducationsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerEducationsQuery, Types.WorkerEducationsQueryVariables>(WorkerEducationsDocument, variables, options);