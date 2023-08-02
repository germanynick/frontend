import * as Types from './types';

import { useMutation, useQuery, useInfiniteQuery, UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { fetcher } from '../fetcher';

export const ActiveClientDocument = `
    mutation activeClient($id: String!) {
  activeClient(id: $id) {
    success
  }
}
    `;
export const useActiveClientMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ActiveClientMutation, TError, Types.ActiveClientMutationVariables, TContext>) =>
    useMutation<Types.ActiveClientMutation, TError, Types.ActiveClientMutationVariables, TContext>(
      ['activeClient'],
      (variables?: Types.ActiveClientMutationVariables) => fetcher<Types.ActiveClientMutation, Types.ActiveClientMutationVariables>(ActiveClientDocument, variables)(),
      options
    );
useActiveClientMutation.getKey = () => ['activeClient'];

useActiveClientMutation.fetcher = (variables: Types.ActiveClientMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ActiveClientMutation, Types.ActiveClientMutationVariables>(ActiveClientDocument, variables, options);
export const ActiveLocationDocument = `
    mutation activeLocation($id: String!) {
  activeLocation(id: $id) {
    active
    address
    addressState
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    clientId
    companyId
    country
    distanceToCurrentUserSearchLocation
    id
    latitude
    longitude
    name
    phone
    region
    statusUpdatedAt
    statusUpdater {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    zipcode
  }
}
    `;
export const useActiveLocationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ActiveLocationMutation, TError, Types.ActiveLocationMutationVariables, TContext>) =>
    useMutation<Types.ActiveLocationMutation, TError, Types.ActiveLocationMutationVariables, TContext>(
      ['activeLocation'],
      (variables?: Types.ActiveLocationMutationVariables) => fetcher<Types.ActiveLocationMutation, Types.ActiveLocationMutationVariables>(ActiveLocationDocument, variables)(),
      options
    );
useActiveLocationMutation.getKey = () => ['activeLocation'];

useActiveLocationMutation.fetcher = (variables: Types.ActiveLocationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ActiveLocationMutation, Types.ActiveLocationMutationVariables>(ActiveLocationDocument, variables, options);
export const AddPaymentMethodDocument = `
    mutation addPaymentMethod($clientId: String, $stripeToken: String!) {
  addPaymentMethod(clientId: $clientId, stripeToken: $stripeToken) {
    cardInfo
    id
    isDefault
  }
}
    `;
export const useAddPaymentMethodMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.AddPaymentMethodMutation, TError, Types.AddPaymentMethodMutationVariables, TContext>) =>
    useMutation<Types.AddPaymentMethodMutation, TError, Types.AddPaymentMethodMutationVariables, TContext>(
      ['addPaymentMethod'],
      (variables?: Types.AddPaymentMethodMutationVariables) => fetcher<Types.AddPaymentMethodMutation, Types.AddPaymentMethodMutationVariables>(AddPaymentMethodDocument, variables)(),
      options
    );
useAddPaymentMethodMutation.getKey = () => ['addPaymentMethod'];

useAddPaymentMethodMutation.fetcher = (variables: Types.AddPaymentMethodMutationVariables, options?: RequestInit['headers']) => fetcher<Types.AddPaymentMethodMutation, Types.AddPaymentMethodMutationVariables>(AddPaymentMethodDocument, variables, options);
export const AdminCreateOrUpdateWorkerBlockDocument = `
    mutation adminCreateOrUpdateWorkerBlock($jobId: String!, $workerBlocksAttributes: [WorkerBlockArgument!]!, $workerId: String!) {
  adminCreateOrUpdateWorkerBlock(
    workerBlocksAttributes: $workerBlocksAttributes
    workerId: $workerId
  ) {
    blockedLevel
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    clientId
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
    companyId
    createdAt
    employer {
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
    employerId
    id
    note
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerId
  }
}
    `;
export const useAdminCreateOrUpdateWorkerBlockMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.AdminCreateOrUpdateWorkerBlockMutation, TError, Types.AdminCreateOrUpdateWorkerBlockMutationVariables, TContext>) =>
    useMutation<Types.AdminCreateOrUpdateWorkerBlockMutation, TError, Types.AdminCreateOrUpdateWorkerBlockMutationVariables, TContext>(
      ['adminCreateOrUpdateWorkerBlock'],
      (variables?: Types.AdminCreateOrUpdateWorkerBlockMutationVariables) => fetcher<Types.AdminCreateOrUpdateWorkerBlockMutation, Types.AdminCreateOrUpdateWorkerBlockMutationVariables>(AdminCreateOrUpdateWorkerBlockDocument, variables)(),
      options
    );
useAdminCreateOrUpdateWorkerBlockMutation.getKey = () => ['adminCreateOrUpdateWorkerBlock'];

useAdminCreateOrUpdateWorkerBlockMutation.fetcher = (variables: Types.AdminCreateOrUpdateWorkerBlockMutationVariables, options?: RequestInit['headers']) => fetcher<Types.AdminCreateOrUpdateWorkerBlockMutation, Types.AdminCreateOrUpdateWorkerBlockMutationVariables>(AdminCreateOrUpdateWorkerBlockDocument, variables, options);
export const AdminSendAdminRemindersDocument = `
    mutation adminSendAdminReminders($additionalData: JSON, $content: String!, $objectIds: [String!]!, $reminderChannels: JSON, $reminderTime: ISO8601DateTime, $reminderType: AdminReminderTypeEnum, $title: String!) {
  adminSendAdminReminders(
    additionalData: $additionalData
    content: $content
    objectIds: $objectIds
    reminderChannels: $reminderChannels
    reminderTime: $reminderTime
    reminderType: $reminderType
    title: $title
  ) {
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
    content
    createdAt
    employer {
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
    id
    reminderChannels
    reminderType
    title
    updatedAt
  }
}
    `;
export const useAdminSendAdminRemindersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.AdminSendAdminRemindersMutation, TError, Types.AdminSendAdminRemindersMutationVariables, TContext>) =>
    useMutation<Types.AdminSendAdminRemindersMutation, TError, Types.AdminSendAdminRemindersMutationVariables, TContext>(
      ['adminSendAdminReminders'],
      (variables?: Types.AdminSendAdminRemindersMutationVariables) => fetcher<Types.AdminSendAdminRemindersMutation, Types.AdminSendAdminRemindersMutationVariables>(AdminSendAdminRemindersDocument, variables)(),
      options
    );
useAdminSendAdminRemindersMutation.getKey = () => ['adminSendAdminReminders'];

useAdminSendAdminRemindersMutation.fetcher = (variables: Types.AdminSendAdminRemindersMutationVariables, options?: RequestInit['headers']) => fetcher<Types.AdminSendAdminRemindersMutation, Types.AdminSendAdminRemindersMutationVariables>(AdminSendAdminRemindersDocument, variables, options);
export const AdminSendPasswordResetWorkerDocument = `
    mutation adminSendPasswordResetWorker($id: String!) {
  adminSendPasswordResetWorker(id: $id) {
    success
  }
}
    `;
export const useAdminSendPasswordResetWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.AdminSendPasswordResetWorkerMutation, TError, Types.AdminSendPasswordResetWorkerMutationVariables, TContext>) =>
    useMutation<Types.AdminSendPasswordResetWorkerMutation, TError, Types.AdminSendPasswordResetWorkerMutationVariables, TContext>(
      ['adminSendPasswordResetWorker'],
      (variables?: Types.AdminSendPasswordResetWorkerMutationVariables) => fetcher<Types.AdminSendPasswordResetWorkerMutation, Types.AdminSendPasswordResetWorkerMutationVariables>(AdminSendPasswordResetWorkerDocument, variables)(),
      options
    );
useAdminSendPasswordResetWorkerMutation.getKey = () => ['adminSendPasswordResetWorker'];

useAdminSendPasswordResetWorkerMutation.fetcher = (variables: Types.AdminSendPasswordResetWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.AdminSendPasswordResetWorkerMutation, Types.AdminSendPasswordResetWorkerMutationVariables>(AdminSendPasswordResetWorkerDocument, variables, options);
export const AdminUpdateWorkerOnboardingPartDocument = `
    mutation adminUpdateWorkerOnboardingPart($jobId: String!, $jobId1: String!, $jobId2: String!, $id: String!, $integrationAttributes: JSON, $workerId: String!) {
  adminUpdateWorkerOnboardingPart(
    id: $id
    integrationAttributes: $integrationAttributes
    workerId: $workerId
  ) {
    id
    integration {
      __typename
      ... on GroupOnboardingPart {
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
        id
        state
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
      }
      ... on ProfileOnboarding {
        id
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId1)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
      }
      ... on UserTermsOfService {
        agreedAt
        id
        termsOfService {
          id
          url
          version
        }
      }
      ... on WorkExperienceOverview {
        discipline
        id
        primarySpecialty
        secondarySpecialty
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
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId2)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
        yearsOfExperience
      }
      ... on WorkerCertificationOverview {
        id
        workerCertifications {
          certificationType
          compactLicense
          createdAt
          expirationDate
          id
          licenseDiscipline
          licenseNumber
          licenseState
          title
        }
      }
      ... on WorkerEducationOverview {
        id
        workerEducations {
          city
          country
          createdAt
          degreeDate
          degreeName
          id
          major
          schoolName
          state
        }
      }
      ... on WorkerReferenceOnboarding {
        id
        workerReferences {
          city
          contactEmail
          contactFirstName
          contactFullName
          contactLastName
          contactPhone
          createdAt
          facilityName
          id
          jobTitle
          refType
          relationship
          salutation
          state
          workedFrom
          workedTo
        }
      }
    }
    integrationConfigurations
    integrationObject
    onboardingPart {
      companyId
      companyOnboardingId
      confirmationMessage
      description
      failedMessage
      id
      integrationObject
      isEnabled
      name
      pendingMessage
      quizId
      referenceUrl
    }
    state
    workerId
    workerOnboarding {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
  }
}
    `;
export const useAdminUpdateWorkerOnboardingPartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.AdminUpdateWorkerOnboardingPartMutation, TError, Types.AdminUpdateWorkerOnboardingPartMutationVariables, TContext>) =>
    useMutation<Types.AdminUpdateWorkerOnboardingPartMutation, TError, Types.AdminUpdateWorkerOnboardingPartMutationVariables, TContext>(
      ['adminUpdateWorkerOnboardingPart'],
      (variables?: Types.AdminUpdateWorkerOnboardingPartMutationVariables) => fetcher<Types.AdminUpdateWorkerOnboardingPartMutation, Types.AdminUpdateWorkerOnboardingPartMutationVariables>(AdminUpdateWorkerOnboardingPartDocument, variables)(),
      options
    );
useAdminUpdateWorkerOnboardingPartMutation.getKey = () => ['adminUpdateWorkerOnboardingPart'];

useAdminUpdateWorkerOnboardingPartMutation.fetcher = (variables: Types.AdminUpdateWorkerOnboardingPartMutationVariables, options?: RequestInit['headers']) => fetcher<Types.AdminUpdateWorkerOnboardingPartMutation, Types.AdminUpdateWorkerOnboardingPartMutationVariables>(AdminUpdateWorkerOnboardingPartDocument, variables, options);
export const AdminUploadDocumentsWorkerDocument = `
    mutation adminUploadDocumentsWorker($size: [String!]!, $jobId: String!, $size1: [String!]!, $id: String!, $supportDocumentsAttributes: [SupportDocumentArgument!]) {
  adminUploadDocumentsWorker(
    id: $id
    supportDocumentsAttributes: $supportDocumentsAttributes
  ) {
    agreedToTerms
    availableStartDate
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    avatarUrl
    blocked
    blockedClient {
      note
    }
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
    dateOfBirth
    email
    emergencyContact {
      contactName
      contactPhone
      contactRelationship
      id
      workerId
    }
    employmentType
    facilityTypes
    firstName
    hasActiveAssignment
    id
    isFavorited
    jobCategoriesWorkedNumber
    jobMatchingScore(jobId: $jobId)
    lastName
    lastOtpExpiredAt
    lastSignInAt
    locationsWorkedNumber
    maidenName
    noCall
    noEmail
    noNotification
    noSms
    noTalentMatches
    notificationSetting {
      assignmentEndingReminder
      completeOnboarding
      documentExpired
      id
      interviewInvitationExpired
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
    profilePercentageCompleted
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
    remainingExpirationTime
    resumes {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size1)
      thumbnails
    }
    shiftRequested
    socialSecurityNumber
    supportDocuments {
      documentType
      id
    }
    timeOffRequested
    totalUnreadMessage
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
    workerCertifications {
      certificationType
      compactLicense
      createdAt
      expirationDate
      id
      licenseDiscipline
      licenseNumber
      licenseState
      title
    }
    workerEducations {
      city
      country
      createdAt
      degreeDate
      degreeName
      id
      major
      schoolName
      state
    }
    workerNotes {
      id
      note
      noteType
    }
    workerOnboardings {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
    workerReferences {
      city
      contactEmail
      contactFirstName
      contactFullName
      contactLastName
      contactPhone
      createdAt
      facilityName
      id
      jobTitle
      refType
      relationship
      salutation
      state
      workedFrom
      workedTo
    }
    workerSpecialties {
      category
      completedChecklist
      id
      isExpired
      isPrimary
      specialty
      specialtyId
      specialtyLongName
      status
    }
    workingAuthorization {
      dateOfBirth
      id
      idPhotoUrl
      legalRightToWork
      socialSecurityNumber
      workerId
    }
    workingPreferredLocations {
      id
      preferredWorkingCity
      preferredWorkingState
    }
  }
}
    `;
export const useAdminUploadDocumentsWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.AdminUploadDocumentsWorkerMutation, TError, Types.AdminUploadDocumentsWorkerMutationVariables, TContext>) =>
    useMutation<Types.AdminUploadDocumentsWorkerMutation, TError, Types.AdminUploadDocumentsWorkerMutationVariables, TContext>(
      ['adminUploadDocumentsWorker'],
      (variables?: Types.AdminUploadDocumentsWorkerMutationVariables) => fetcher<Types.AdminUploadDocumentsWorkerMutation, Types.AdminUploadDocumentsWorkerMutationVariables>(AdminUploadDocumentsWorkerDocument, variables)(),
      options
    );
useAdminUploadDocumentsWorkerMutation.getKey = () => ['adminUploadDocumentsWorker'];

useAdminUploadDocumentsWorkerMutation.fetcher = (variables: Types.AdminUploadDocumentsWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.AdminUploadDocumentsWorkerMutation, Types.AdminUploadDocumentsWorkerMutationVariables>(AdminUploadDocumentsWorkerDocument, variables, options);
export const BookmarkAJobDocument = `
    mutation bookmarkAJob($action: BookmarkActionEnum!, $jobId: String!) {
  bookmarkAJob(action: $action, jobId: $jobId) {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    distance
    distanceToCurrentUserSearchLocation
    draftId
    duration
    durationType
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hospital
    hoursPerWeek
    id
    images
    isAsap
    isBookmarked
    isDisliked
    isFavorited
    isLiked
    isSkillChecklist
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    latitude
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    locationImage {
      city
      id
      state
    }
    longitude
    matchingPercentage
    minExpYear
    minWeeklyPayAmount
    noTalentMatches
    profileRequirements
    publishedAt
    requirementNotes
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const useBookmarkAJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.BookmarkAJobMutation, TError, Types.BookmarkAJobMutationVariables, TContext>) =>
    useMutation<Types.BookmarkAJobMutation, TError, Types.BookmarkAJobMutationVariables, TContext>(
      ['bookmarkAJob'],
      (variables?: Types.BookmarkAJobMutationVariables) => fetcher<Types.BookmarkAJobMutation, Types.BookmarkAJobMutationVariables>(BookmarkAJobDocument, variables)(),
      options
    );
useBookmarkAJobMutation.getKey = () => ['bookmarkAJob'];

useBookmarkAJobMutation.fetcher = (variables: Types.BookmarkAJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.BookmarkAJobMutation, Types.BookmarkAJobMutationVariables>(BookmarkAJobDocument, variables, options);
export const CancelWorkerOnboardingDocument = `
    mutation cancelWorkerOnboarding($jobId: String!, $id: String!) {
  cancelWorkerOnboarding(id: $id) {
    companyOnboardingId
    currentPartIndex
    id
    message
    numOfCompletedSteps
    pendingWorkerOnboardingPart {
      id
      integration {
        __typename
        ... on GroupOnboardingPart {
          id
          state
        }
        ... on ProfileOnboarding {
          id
        }
        ... on UserTermsOfService {
          agreedAt
          id
        }
        ... on WorkExperienceOverview {
          discipline
          id
          primarySpecialty
          secondarySpecialty
          yearsOfExperience
        }
        ... on WorkerCertificationOverview {
          id
        }
        ... on WorkerEducationOverview {
          id
        }
        ... on WorkerReferenceOnboarding {
          id
        }
      }
      integrationConfigurations
      integrationObject
      state
      workerId
    }
    percentageCompleted
    permittedEvents
    state
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useCancelWorkerOnboardingMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CancelWorkerOnboardingMutation, TError, Types.CancelWorkerOnboardingMutationVariables, TContext>) =>
    useMutation<Types.CancelWorkerOnboardingMutation, TError, Types.CancelWorkerOnboardingMutationVariables, TContext>(
      ['cancelWorkerOnboarding'],
      (variables?: Types.CancelWorkerOnboardingMutationVariables) => fetcher<Types.CancelWorkerOnboardingMutation, Types.CancelWorkerOnboardingMutationVariables>(CancelWorkerOnboardingDocument, variables)(),
      options
    );
useCancelWorkerOnboardingMutation.getKey = () => ['cancelWorkerOnboarding'];

useCancelWorkerOnboardingMutation.fetcher = (variables: Types.CancelWorkerOnboardingMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CancelWorkerOnboardingMutation, Types.CancelWorkerOnboardingMutationVariables>(CancelWorkerOnboardingDocument, variables, options);
export const CancelWorkerOnboardingPartDocument = `
    mutation cancelWorkerOnboardingPart($jobId: String!, $jobId1: String!, $jobId2: String!, $id: String!) {
  cancelWorkerOnboardingPart(id: $id) {
    id
    integration {
      __typename
      ... on GroupOnboardingPart {
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
        id
        state
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
      }
      ... on ProfileOnboarding {
        id
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId1)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
      }
      ... on UserTermsOfService {
        agreedAt
        id
        termsOfService {
          id
          url
          version
        }
      }
      ... on WorkExperienceOverview {
        discipline
        id
        primarySpecialty
        secondarySpecialty
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
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId2)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
        yearsOfExperience
      }
      ... on WorkerCertificationOverview {
        id
        workerCertifications {
          certificationType
          compactLicense
          createdAt
          expirationDate
          id
          licenseDiscipline
          licenseNumber
          licenseState
          title
        }
      }
      ... on WorkerEducationOverview {
        id
        workerEducations {
          city
          country
          createdAt
          degreeDate
          degreeName
          id
          major
          schoolName
          state
        }
      }
      ... on WorkerReferenceOnboarding {
        id
        workerReferences {
          city
          contactEmail
          contactFirstName
          contactFullName
          contactLastName
          contactPhone
          createdAt
          facilityName
          id
          jobTitle
          refType
          relationship
          salutation
          state
          workedFrom
          workedTo
        }
      }
    }
    integrationConfigurations
    integrationObject
    onboardingPart {
      companyId
      companyOnboardingId
      confirmationMessage
      description
      failedMessage
      id
      integrationObject
      isEnabled
      name
      pendingMessage
      quizId
      referenceUrl
    }
    state
    workerId
    workerOnboarding {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
  }
}
    `;
export const useCancelWorkerOnboardingPartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CancelWorkerOnboardingPartMutation, TError, Types.CancelWorkerOnboardingPartMutationVariables, TContext>) =>
    useMutation<Types.CancelWorkerOnboardingPartMutation, TError, Types.CancelWorkerOnboardingPartMutationVariables, TContext>(
      ['cancelWorkerOnboardingPart'],
      (variables?: Types.CancelWorkerOnboardingPartMutationVariables) => fetcher<Types.CancelWorkerOnboardingPartMutation, Types.CancelWorkerOnboardingPartMutationVariables>(CancelWorkerOnboardingPartDocument, variables)(),
      options
    );
useCancelWorkerOnboardingPartMutation.getKey = () => ['cancelWorkerOnboardingPart'];

useCancelWorkerOnboardingPartMutation.fetcher = (variables: Types.CancelWorkerOnboardingPartMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CancelWorkerOnboardingPartMutation, Types.CancelWorkerOnboardingPartMutationVariables>(CancelWorkerOnboardingPartDocument, variables, options);
export const ChangePasswordEmployerDocument = `
    mutation changePasswordEmployer($oldPassword: String!, $password: String, $passwordConfirmation: String) {
  changePasswordEmployer(
    oldPassword: $oldPassword
    password: $password
    passwordConfirmation: $passwordConfirmation
  ) {
    success
  }
}
    `;
export const useChangePasswordEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ChangePasswordEmployerMutation, TError, Types.ChangePasswordEmployerMutationVariables, TContext>) =>
    useMutation<Types.ChangePasswordEmployerMutation, TError, Types.ChangePasswordEmployerMutationVariables, TContext>(
      ['changePasswordEmployer'],
      (variables?: Types.ChangePasswordEmployerMutationVariables) => fetcher<Types.ChangePasswordEmployerMutation, Types.ChangePasswordEmployerMutationVariables>(ChangePasswordEmployerDocument, variables)(),
      options
    );
useChangePasswordEmployerMutation.getKey = () => ['changePasswordEmployer'];

useChangePasswordEmployerMutation.fetcher = (variables: Types.ChangePasswordEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ChangePasswordEmployerMutation, Types.ChangePasswordEmployerMutationVariables>(ChangePasswordEmployerDocument, variables, options);
export const ChangePasswordForUserDocument = `
    mutation changePasswordForUser($oldPassword: String!, $password: String!, $passwordConfirmation: String!) {
  changePasswordForUser(
    oldPassword: $oldPassword
    password: $password
    passwordConfirmation: $passwordConfirmation
  ) {
    success
  }
}
    `;
export const useChangePasswordForUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ChangePasswordForUserMutation, TError, Types.ChangePasswordForUserMutationVariables, TContext>) =>
    useMutation<Types.ChangePasswordForUserMutation, TError, Types.ChangePasswordForUserMutationVariables, TContext>(
      ['changePasswordForUser'],
      (variables?: Types.ChangePasswordForUserMutationVariables) => fetcher<Types.ChangePasswordForUserMutation, Types.ChangePasswordForUserMutationVariables>(ChangePasswordForUserDocument, variables)(),
      options
    );
useChangePasswordForUserMutation.getKey = () => ['changePasswordForUser'];

useChangePasswordForUserMutation.fetcher = (variables: Types.ChangePasswordForUserMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ChangePasswordForUserMutation, Types.ChangePasswordForUserMutationVariables>(ChangePasswordForUserDocument, variables, options);
export const ChangeStatusEmployerDocument = `
    mutation changeStatusEmployer($size: [String!]!, $id: String!, $status: EmployerStatusEnum!) {
  changeStatusEmployer(id: $id, status: $status) {
    agreedToTerms
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    changePasswordRequired
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    email
    firstName
    id
    intervieweesNumber
    lastName
    lastSignInAt
    paymentMethod
    permittedEvents
    phone
    scope
    scopesAreAllowedToUpdate
    status
    title
    totalUnreadMessage
  }
}
    `;
export const useChangeStatusEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ChangeStatusEmployerMutation, TError, Types.ChangeStatusEmployerMutationVariables, TContext>) =>
    useMutation<Types.ChangeStatusEmployerMutation, TError, Types.ChangeStatusEmployerMutationVariables, TContext>(
      ['changeStatusEmployer'],
      (variables?: Types.ChangeStatusEmployerMutationVariables) => fetcher<Types.ChangeStatusEmployerMutation, Types.ChangeStatusEmployerMutationVariables>(ChangeStatusEmployerDocument, variables)(),
      options
    );
useChangeStatusEmployerMutation.getKey = () => ['changeStatusEmployer'];

useChangeStatusEmployerMutation.fetcher = (variables: Types.ChangeStatusEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ChangeStatusEmployerMutation, Types.ChangeStatusEmployerMutationVariables>(ChangeStatusEmployerDocument, variables, options);
export const CloseJobDocument = `
    mutation closeJob($id: String!) {
  closeJob(id: $id) {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    distance
    distanceToCurrentUserSearchLocation
    draftId
    duration
    durationType
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hospital
    hoursPerWeek
    id
    images
    isAsap
    isBookmarked
    isDisliked
    isFavorited
    isLiked
    isSkillChecklist
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    latitude
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    locationImage {
      city
      id
      state
    }
    longitude
    matchingPercentage
    minExpYear
    minWeeklyPayAmount
    noTalentMatches
    profileRequirements
    publishedAt
    requirementNotes
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const useCloseJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CloseJobMutation, TError, Types.CloseJobMutationVariables, TContext>) =>
    useMutation<Types.CloseJobMutation, TError, Types.CloseJobMutationVariables, TContext>(
      ['closeJob'],
      (variables?: Types.CloseJobMutationVariables) => fetcher<Types.CloseJobMutation, Types.CloseJobMutationVariables>(CloseJobDocument, variables)(),
      options
    );
useCloseJobMutation.getKey = () => ['closeJob'];

useCloseJobMutation.fetcher = (variables: Types.CloseJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CloseJobMutation, Types.CloseJobMutationVariables>(CloseJobDocument, variables, options);
export const CreateClientDocument = `
    mutation createClient($size: [String!]!, $address1: String, $address2: String, $city: String, $contactEmail: String, $contactFirstName: String, $contactLastName: String, $contactPhone: String, $country: String, $description: String, $ein: String, $imageSignedBlobId: String, $latitude: BigDecimal, $locationsAttributes: [LocationArgument!], $longitude: BigDecimal, $name: String!, $ownerAttributes: EmployerArgument, $phone: String, $source: SignupSourceEnum, $state: String, $taxId: String, $url: String, $zipCode: String) {
  createClient(
    address1: $address1
    address2: $address2
    city: $city
    contactEmail: $contactEmail
    contactFirstName: $contactFirstName
    contactLastName: $contactLastName
    contactPhone: $contactPhone
    country: $country
    description: $description
    ein: $ein
    imageSignedBlobId: $imageSignedBlobId
    latitude: $latitude
    locationsAttributes: $locationsAttributes
    longitude: $longitude
    name: $name
    ownerAttributes: $ownerAttributes
    phone: $phone
    source: $source
    state: $state
    taxId: $taxId
    url: $url
    zipCode: $zipCode
  ) {
    address1
    address2
    billingPlan {
      active
      description
      id
      imageUrl
      isFree
      name
    }
    city
    contactEmail
    contactFirstName
    contactLastName
    contactName
    contactPhone
    country
    description
    ein
    id
    image {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    latitude
    longitude
    name
    phone
    state
    status
    taxId
    url
    verifiedAt
    verifiedBy {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    verifyStatus
    zipCode
  }
}
    `;
export const useCreateClientMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateClientMutation, TError, Types.CreateClientMutationVariables, TContext>) =>
    useMutation<Types.CreateClientMutation, TError, Types.CreateClientMutationVariables, TContext>(
      ['createClient'],
      (variables?: Types.CreateClientMutationVariables) => fetcher<Types.CreateClientMutation, Types.CreateClientMutationVariables>(CreateClientDocument, variables)(),
      options
    );
useCreateClientMutation.getKey = () => ['createClient'];

useCreateClientMutation.fetcher = (variables: Types.CreateClientMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateClientMutation, Types.CreateClientMutationVariables>(CreateClientDocument, variables, options);
export const CreateCompanyOnboardingDocument = `
    mutation createCompanyOnboarding($description: String!, $name: String!, $referenceUrl: String) {
  createCompanyOnboarding(
    description: $description
    name: $name
    referenceUrl: $referenceUrl
  ) {
    companyId
    description
    id
    name
    onboardingPartsNumber
    referenceUrl
  }
}
    `;
export const useCreateCompanyOnboardingMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateCompanyOnboardingMutation, TError, Types.CreateCompanyOnboardingMutationVariables, TContext>) =>
    useMutation<Types.CreateCompanyOnboardingMutation, TError, Types.CreateCompanyOnboardingMutationVariables, TContext>(
      ['createCompanyOnboarding'],
      (variables?: Types.CreateCompanyOnboardingMutationVariables) => fetcher<Types.CreateCompanyOnboardingMutation, Types.CreateCompanyOnboardingMutationVariables>(CreateCompanyOnboardingDocument, variables)(),
      options
    );
useCreateCompanyOnboardingMutation.getKey = () => ['createCompanyOnboarding'];

useCreateCompanyOnboardingMutation.fetcher = (variables: Types.CreateCompanyOnboardingMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateCompanyOnboardingMutation, Types.CreateCompanyOnboardingMutationVariables>(CreateCompanyOnboardingDocument, variables, options);
export const CreateDirectUploadDocument = `
    mutation createDirectUpload($byteSize: Int!, $checksum: String!, $contentType: String!, $filename: String!) {
  createDirectUpload(
    byteSize: $byteSize
    checksum: $checksum
    contentType: $contentType
    filename: $filename
  ) {
    blobId
    headers
    preSignedUrl
    signedBlobId
    url
  }
}
    `;
export const useCreateDirectUploadMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateDirectUploadMutation, TError, Types.CreateDirectUploadMutationVariables, TContext>) =>
    useMutation<Types.CreateDirectUploadMutation, TError, Types.CreateDirectUploadMutationVariables, TContext>(
      ['createDirectUpload'],
      (variables?: Types.CreateDirectUploadMutationVariables) => fetcher<Types.CreateDirectUploadMutation, Types.CreateDirectUploadMutationVariables>(CreateDirectUploadDocument, variables)(),
      options
    );
useCreateDirectUploadMutation.getKey = () => ['createDirectUpload'];

useCreateDirectUploadMutation.fetcher = (variables: Types.CreateDirectUploadMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateDirectUploadMutation, Types.CreateDirectUploadMutationVariables>(CreateDirectUploadDocument, variables, options);
export const CreateDraftJobDocument = `
    mutation createDraftJob($accountId: String, $address: String, $address2: String, $benefitContent: String, $certificationsRequired: String, $city: String, $clientId: String, $complianceRequirements: [String!], $country: String, $customStartDate: String, $deletedBy: String, $description: String, $discipline: String, $duration: Int, $durationType: String, $employerOfRecord: JobEmployerOfRecordEnum, $exclusiveJob: String, $facilityType: String, $frequency: String, $hospital: String, $hoursPerWeek: Int, $isAsap: Boolean, $isSkillChecklist: Boolean, $jobInvitationsAttributes: [JobInvitationArgument!], $jobType: String, $latitude: BigDecimal, $licenseStateCompact: Boolean, $licenseStateRequired: [String!], $licensesRequired: [String!], $locationId: String, $longitude: BigDecimal, $minExpYear: Int, $minWeeklyPayAmount: Float, $profileRequirements: [String!], $recommendType: JobRecommendTypeEnum, $requirementNotes: String, $scope: String, $shifts: [String!], $skillId: Int, $skillLongName: String, $skillName: String, $slotsNumber: Int, $slug: String, $source: String, $specialty: [String!], $startDate: ISO8601DateTime, $state: String, $title: String, $weeklyPayAmount: Float, $zipcode: String) {
  createDraftJob(
    accountId: $accountId
    address: $address
    address2: $address2
    benefitContent: $benefitContent
    certificationsRequired: $certificationsRequired
    city: $city
    clientId: $clientId
    complianceRequirements: $complianceRequirements
    country: $country
    customStartDate: $customStartDate
    deletedBy: $deletedBy
    description: $description
    discipline: $discipline
    duration: $duration
    durationType: $durationType
    employerOfRecord: $employerOfRecord
    exclusiveJob: $exclusiveJob
    facilityType: $facilityType
    frequency: $frequency
    hospital: $hospital
    hoursPerWeek: $hoursPerWeek
    isAsap: $isAsap
    isSkillChecklist: $isSkillChecklist
    jobInvitationsAttributes: $jobInvitationsAttributes
    jobType: $jobType
    latitude: $latitude
    licenseStateCompact: $licenseStateCompact
    licenseStateRequired: $licenseStateRequired
    licensesRequired: $licensesRequired
    locationId: $locationId
    longitude: $longitude
    minExpYear: $minExpYear
    minWeeklyPayAmount: $minWeeklyPayAmount
    profileRequirements: $profileRequirements
    recommendType: $recommendType
    requirementNotes: $requirementNotes
    scope: $scope
    shifts: $shifts
    skillId: $skillId
    skillLongName: $skillLongName
    skillName: $skillName
    slotsNumber: $slotsNumber
    slug: $slug
    source: $source
    specialty: $specialty
    startDate: $startDate
    state: $state
    title: $title
    weeklyPayAmount: $weeklyPayAmount
    zipcode: $zipcode
  ) {
    address
    address2
    benefitContent
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    draftId
    duration
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    frequency
    hospital
    hoursPerWeek
    id
    isAsap
    isSkillChecklist
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    minExpYear
    minWeeklyPayAmount
    profileRequirements
    publishedAt
    requirementNotes
    scope
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const useCreateDraftJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateDraftJobMutation, TError, Types.CreateDraftJobMutationVariables, TContext>) =>
    useMutation<Types.CreateDraftJobMutation, TError, Types.CreateDraftJobMutationVariables, TContext>(
      ['createDraftJob'],
      (variables?: Types.CreateDraftJobMutationVariables) => fetcher<Types.CreateDraftJobMutation, Types.CreateDraftJobMutationVariables>(CreateDraftJobDocument, variables)(),
      options
    );
useCreateDraftJobMutation.getKey = () => ['createDraftJob'];

useCreateDraftJobMutation.fetcher = (variables?: Types.CreateDraftJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateDraftJobMutation, Types.CreateDraftJobMutationVariables>(CreateDraftJobDocument, variables, options);
export const CreateEmployerDocument = `
    mutation createEmployer($size: [String!]!, $agreedToTerms: Boolean, $avatarSignedBlobId: String, $clientId: String, $email: String, $firstName: String, $lastName: String, $password: String, $passwordConfirmation: String, $paymentMethod: String, $phone: String, $scope: EmployerScopeEnum, $source: SignupSourceEnum, $title: String) {
  createEmployer(
    agreedToTerms: $agreedToTerms
    avatarSignedBlobId: $avatarSignedBlobId
    clientId: $clientId
    email: $email
    firstName: $firstName
    lastName: $lastName
    password: $password
    passwordConfirmation: $passwordConfirmation
    paymentMethod: $paymentMethod
    phone: $phone
    scope: $scope
    source: $source
    title: $title
  ) {
    agreedToTerms
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    changePasswordRequired
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    email
    firstName
    id
    intervieweesNumber
    lastName
    lastSignInAt
    paymentMethod
    permittedEvents
    phone
    scope
    scopesAreAllowedToUpdate
    status
    title
    totalUnreadMessage
  }
}
    `;
export const useCreateEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateEmployerMutation, TError, Types.CreateEmployerMutationVariables, TContext>) =>
    useMutation<Types.CreateEmployerMutation, TError, Types.CreateEmployerMutationVariables, TContext>(
      ['createEmployer'],
      (variables?: Types.CreateEmployerMutationVariables) => fetcher<Types.CreateEmployerMutation, Types.CreateEmployerMutationVariables>(CreateEmployerDocument, variables)(),
      options
    );
useCreateEmployerMutation.getKey = () => ['createEmployer'];

useCreateEmployerMutation.fetcher = (variables: Types.CreateEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateEmployerMutation, Types.CreateEmployerMutationVariables>(CreateEmployerDocument, variables, options);
export const CreateExtendAssignmentDocument = `
    mutation createExtendAssignment($applicantTimeOffs: [ApplicantTimeOffArgument!], $note: String, $workerAssignmentId: String!) {
  createExtendAssignment(
    applicantTimeOffs: $applicantTimeOffs
    note: $note
    workerAssignmentId: $workerAssignmentId
  ) {
    applicantTimeOffs {
      endDate
      id
      startDate
    }
    id
    note
    timeOffEndDate
    timeOffStartDate
  }
}
    `;
export const useCreateExtendAssignmentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateExtendAssignmentMutation, TError, Types.CreateExtendAssignmentMutationVariables, TContext>) =>
    useMutation<Types.CreateExtendAssignmentMutation, TError, Types.CreateExtendAssignmentMutationVariables, TContext>(
      ['createExtendAssignment'],
      (variables?: Types.CreateExtendAssignmentMutationVariables) => fetcher<Types.CreateExtendAssignmentMutation, Types.CreateExtendAssignmentMutationVariables>(CreateExtendAssignmentDocument, variables)(),
      options
    );
useCreateExtendAssignmentMutation.getKey = () => ['createExtendAssignment'];

useCreateExtendAssignmentMutation.fetcher = (variables: Types.CreateExtendAssignmentMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateExtendAssignmentMutation, Types.CreateExtendAssignmentMutationVariables>(CreateExtendAssignmentDocument, variables, options);
export const CreateFeedbackContactFormDocument = `
    mutation createFeedbackContactForm($size: [String!]!, $contactType: ContactTypeEnum!, $description: String, $email: String, $fullName: String, $imagesSignedBlobIds: [String!], $phone: String, $subject: String) {
  createFeedbackContactForm(
    contactType: $contactType
    description: $description
    email: $email
    fullName: $fullName
    imagesSignedBlobIds: $imagesSignedBlobIds
    phone: $phone
    subject: $subject
  ) {
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    contactType
    createdAt
    description
    email
    fullName
    id
    images {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    ownerId
    ownerType
    phone
    source
    status
    subject
  }
}
    `;
export const useCreateFeedbackContactFormMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateFeedbackContactFormMutation, TError, Types.CreateFeedbackContactFormMutationVariables, TContext>) =>
    useMutation<Types.CreateFeedbackContactFormMutation, TError, Types.CreateFeedbackContactFormMutationVariables, TContext>(
      ['createFeedbackContactForm'],
      (variables?: Types.CreateFeedbackContactFormMutationVariables) => fetcher<Types.CreateFeedbackContactFormMutation, Types.CreateFeedbackContactFormMutationVariables>(CreateFeedbackContactFormDocument, variables)(),
      options
    );
useCreateFeedbackContactFormMutation.getKey = () => ['createFeedbackContactForm'];

useCreateFeedbackContactFormMutation.fetcher = (variables: Types.CreateFeedbackContactFormMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateFeedbackContactFormMutation, Types.CreateFeedbackContactFormMutationVariables>(CreateFeedbackContactFormDocument, variables, options);
export const CreateImportBatchDocument = `
    mutation createImportBatch($clientId: String, $fileSignedBlobId: String!, $objectType: ImportBatchObjectEnum!) {
  createImportBatch(
    clientId: $clientId
    fileSignedBlobId: $fileSignedBlobId
    objectType: $objectType
  ) {
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
    employer {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    id
    objectType
    results
    status
  }
}
    `;
export const useCreateImportBatchMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateImportBatchMutation, TError, Types.CreateImportBatchMutationVariables, TContext>) =>
    useMutation<Types.CreateImportBatchMutation, TError, Types.CreateImportBatchMutationVariables, TContext>(
      ['createImportBatch'],
      (variables?: Types.CreateImportBatchMutationVariables) => fetcher<Types.CreateImportBatchMutation, Types.CreateImportBatchMutationVariables>(CreateImportBatchDocument, variables)(),
      options
    );
useCreateImportBatchMutation.getKey = () => ['createImportBatch'];

useCreateImportBatchMutation.fetcher = (variables: Types.CreateImportBatchMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateImportBatchMutation, Types.CreateImportBatchMutationVariables>(CreateImportBatchDocument, variables, options);
export const CreateIntegrationWorkerDocument = `
    mutation createIntegrationWorker($jobId: String!, $email: String!, $employmentType: String, $externalJobId: String, $facilityTypes: String, $firstName: String!, $lastName: String!, $password: String!, $passwordConfirmation: String!, $phone: String!, $recaptchaToken: String, $referrerCode: String, $socialAuthenticationId: String, $source: SignupSourceEnum, $workerSpecialtiesAttributes: [WorkerSpecialtyArgument!], $workingPreferredLocationsAttributes: [WorkingPreferredLocationArgument!]) {
  createIntegrationWorker(
    email: $email
    employmentType: $employmentType
    externalJobId: $externalJobId
    facilityTypes: $facilityTypes
    firstName: $firstName
    lastName: $lastName
    password: $password
    passwordConfirmation: $passwordConfirmation
    phone: $phone
    recaptchaToken: $recaptchaToken
    referrerCode: $referrerCode
    socialAuthenticationId: $socialAuthenticationId
    source: $source
    workerSpecialtiesAttributes: $workerSpecialtiesAttributes
    workingPreferredLocationsAttributes: $workingPreferredLocationsAttributes
  ) {
    authToken
    notificationChannel
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
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
export const CreateInterviewDocument = `
    mutation createInterview($jobId: String!, $address1: String, $address2: String, $city: String, $clientId: String, $description: String, $employerNote: String, $interviewEndTime: ISO8601DateTime!, $interviewLink: String, $interviewStartTime: ISO8601DateTime!, $interviewType: InterviewTypeEnum, $interviewersAttributes: [InterviewerArgument!]!, $jobApplicantId: String, $jobId1: String, $source: JobApplicantSourceEnum, $state: String, $timezone: String!, $title: String!, $workerId: String!, $zipCode: String) {
  createInterview(
    address1: $address1
    address2: $address2
    city: $city
    clientId: $clientId
    description: $description
    employerNote: $employerNote
    interviewEndTime: $interviewEndTime
    interviewLink: $interviewLink
    interviewStartTime: $interviewStartTime
    interviewType: $interviewType
    interviewersAttributes: $interviewersAttributes
    jobApplicantId: $jobApplicantId
    jobId: $jobId1
    source: $source
    state: $state
    timezone: $timezone
    title: $title
    workerId: $workerId
    zipCode: $zipCode
  ) {
    address1
    address2
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    createdAt
    description
    employerNote
    id
    interviewEndTime
    interviewLink
    interviewStartTime
    interviewType
    interviewers {
      createdAt
      id
      status
      updatedAt
    }
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    note
    state
    status
    statusName
    statusUpdatedAt
    timezone
    title
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    zipCode
  }
}
    `;
export const useCreateInterviewMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateInterviewMutation, TError, Types.CreateInterviewMutationVariables, TContext>) =>
    useMutation<Types.CreateInterviewMutation, TError, Types.CreateInterviewMutationVariables, TContext>(
      ['createInterview'],
      (variables?: Types.CreateInterviewMutationVariables) => fetcher<Types.CreateInterviewMutation, Types.CreateInterviewMutationVariables>(CreateInterviewDocument, variables)(),
      options
    );
useCreateInterviewMutation.getKey = () => ['createInterview'];

useCreateInterviewMutation.fetcher = (variables: Types.CreateInterviewMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateInterviewMutation, Types.CreateInterviewMutationVariables>(CreateInterviewDocument, variables, options);
export const CreateJobDocument = `
    mutation createJob($accountId: String, $address: String, $address2: String, $benefitContent: String, $certificationsRequired: String, $city: String, $clientId: String, $complianceRequirements: [String!], $country: String, $customStartDate: String, $deletedBy: String, $description: String, $discipline: String, $duration: Int, $durationType: String, $employerOfRecord: JobEmployerOfRecordEnum, $exclusiveJob: String, $facilityType: String, $frequency: String, $hospital: String, $hoursPerWeek: Int, $isAsap: Boolean, $isSkillChecklist: Boolean, $jobInvitationsAttributes: [JobInvitationArgument!], $jobType: String, $latitude: BigDecimal, $licenseStateCompact: Boolean, $licenseStateRequired: [String!], $licensesRequired: [String!], $locationId: String, $longitude: BigDecimal, $minExpYear: Int, $minWeeklyPayAmount: Float, $profileRequirements: [String!], $recommendType: JobRecommendTypeEnum, $requirementNotes: String, $scope: String, $shifts: [String!], $skillId: Int, $skillLongName: String, $skillName: String, $slotsNumber: Int, $slug: String, $source: String, $specialty: [String!], $startDate: ISO8601DateTime, $state: String, $title: String, $weeklyPayAmount: Float, $zipcode: String) {
  createJob(
    accountId: $accountId
    address: $address
    address2: $address2
    benefitContent: $benefitContent
    certificationsRequired: $certificationsRequired
    city: $city
    clientId: $clientId
    complianceRequirements: $complianceRequirements
    country: $country
    customStartDate: $customStartDate
    deletedBy: $deletedBy
    description: $description
    discipline: $discipline
    duration: $duration
    durationType: $durationType
    employerOfRecord: $employerOfRecord
    exclusiveJob: $exclusiveJob
    facilityType: $facilityType
    frequency: $frequency
    hospital: $hospital
    hoursPerWeek: $hoursPerWeek
    isAsap: $isAsap
    isSkillChecklist: $isSkillChecklist
    jobInvitationsAttributes: $jobInvitationsAttributes
    jobType: $jobType
    latitude: $latitude
    licenseStateCompact: $licenseStateCompact
    licenseStateRequired: $licenseStateRequired
    licensesRequired: $licensesRequired
    locationId: $locationId
    longitude: $longitude
    minExpYear: $minExpYear
    minWeeklyPayAmount: $minWeeklyPayAmount
    profileRequirements: $profileRequirements
    recommendType: $recommendType
    requirementNotes: $requirementNotes
    scope: $scope
    shifts: $shifts
    skillId: $skillId
    skillLongName: $skillLongName
    skillName: $skillName
    slotsNumber: $slotsNumber
    slug: $slug
    source: $source
    specialty: $specialty
    startDate: $startDate
    state: $state
    title: $title
    weeklyPayAmount: $weeklyPayAmount
    zipcode: $zipcode
  ) {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    distance
    distanceToCurrentUserSearchLocation
    draftId
    duration
    durationType
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hospital
    hoursPerWeek
    id
    images
    isAsap
    isBookmarked
    isDisliked
    isFavorited
    isLiked
    isSkillChecklist
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    latitude
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    locationImage {
      city
      id
      state
    }
    longitude
    matchingPercentage
    minExpYear
    minWeeklyPayAmount
    noTalentMatches
    profileRequirements
    publishedAt
    requirementNotes
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const useCreateJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateJobMutation, TError, Types.CreateJobMutationVariables, TContext>) =>
    useMutation<Types.CreateJobMutation, TError, Types.CreateJobMutationVariables, TContext>(
      ['createJob'],
      (variables?: Types.CreateJobMutationVariables) => fetcher<Types.CreateJobMutation, Types.CreateJobMutationVariables>(CreateJobDocument, variables)(),
      options
    );
useCreateJobMutation.getKey = () => ['createJob'];

useCreateJobMutation.fetcher = (variables?: Types.CreateJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateJobMutation, Types.CreateJobMutationVariables>(CreateJobDocument, variables, options);
export const CreateJobApplicantDocument = `
    mutation createJobApplicant($jobId: String!, $applicantTimeOffs: [ApplicantTimeOffArgument!], $jobId1: String!, $note: String, $source: JobApplicantSourceEnum) {
  createJobApplicant(
    applicantTimeOffs: $applicantTimeOffs
    jobId: $jobId1
    note: $note
    source: $source
  ) {
    address
    address2
    applicantTimeOffs {
      endDate
      id
      startDate
    }
    applicationProcess
    applyDate
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkerAssignment {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    discipline
    duration
    durationType
    employerNote
    frequency
    id
    interview {
      address1
      address2
      city
      createdAt
      description
      employerNote
      id
      interviewEndTime
      interviewLink
      interviewStartTime
      interviewType
      note
      state
      status
      statusName
      statusUpdatedAt
      timezone
      title
      updateEvents
      updatedAt
      zipCode
    }
    isDirectOffer
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicantActivities {
      createdAt
      id
      owner
      statusChanged
      updatedAt
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    note
    offerDate
    payAmount
    shifts
    source
    specialty
    startDate
    startedStatus
    startedStatusName
    state
    status
    statusName
    statusUpdatedAt
    submittal {
      externalUpdatedAt
      id
      jobId
      status
      submittalDate
      workerId
    }
    timeOffEndDate
    timeOffStartDate
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerAssignments {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    zipcode
  }
}
    `;
export const useCreateJobApplicantMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateJobApplicantMutation, TError, Types.CreateJobApplicantMutationVariables, TContext>) =>
    useMutation<Types.CreateJobApplicantMutation, TError, Types.CreateJobApplicantMutationVariables, TContext>(
      ['createJobApplicant'],
      (variables?: Types.CreateJobApplicantMutationVariables) => fetcher<Types.CreateJobApplicantMutation, Types.CreateJobApplicantMutationVariables>(CreateJobApplicantDocument, variables)(),
      options
    );
useCreateJobApplicantMutation.getKey = () => ['createJobApplicant'];

useCreateJobApplicantMutation.fetcher = (variables: Types.CreateJobApplicantMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateJobApplicantMutation, Types.CreateJobApplicantMutationVariables>(CreateJobApplicantDocument, variables, options);
export const CreateJobTemplateDocument = `
    mutation createJobTemplate($accountId: String, $address: String, $address2: String, $benefitContent: String, $certificationsRequired: String, $city: String, $clientId: String, $complianceRequirements: [String!], $country: String, $customStartDate: String, $deletedBy: String, $description: String, $discipline: String, $duration: Int, $durationType: String, $employerOfRecord: JobEmployerOfRecordEnum, $exclusiveJob: String, $facilityType: String, $frequency: String, $hospital: String, $hoursPerWeek: Int, $isAsap: Boolean, $isSkillChecklist: Boolean, $jobInvitationsAttributes: [JobInvitationArgument!], $jobType: String, $latitude: BigDecimal, $licenseStateCompact: Boolean, $licenseStateRequired: [String!], $licensesRequired: [String!], $locationId: String, $longitude: BigDecimal, $minExpYear: Int, $minWeeklyPayAmount: Float, $profileRequirements: [String!], $recommendType: JobRecommendTypeEnum, $requirementNotes: String, $scope: String, $shifts: [String!], $skillId: Int, $skillLongName: String, $skillName: String, $slotsNumber: Int, $slug: String, $source: String, $specialty: [String!], $startDate: ISO8601DateTime, $state: String, $templateName: String!, $title: String, $weeklyPayAmount: Float, $zipcode: String) {
  createJobTemplate(
    accountId: $accountId
    address: $address
    address2: $address2
    benefitContent: $benefitContent
    certificationsRequired: $certificationsRequired
    city: $city
    clientId: $clientId
    complianceRequirements: $complianceRequirements
    country: $country
    customStartDate: $customStartDate
    deletedBy: $deletedBy
    description: $description
    discipline: $discipline
    duration: $duration
    durationType: $durationType
    employerOfRecord: $employerOfRecord
    exclusiveJob: $exclusiveJob
    facilityType: $facilityType
    frequency: $frequency
    hospital: $hospital
    hoursPerWeek: $hoursPerWeek
    isAsap: $isAsap
    isSkillChecklist: $isSkillChecklist
    jobInvitationsAttributes: $jobInvitationsAttributes
    jobType: $jobType
    latitude: $latitude
    licenseStateCompact: $licenseStateCompact
    licenseStateRequired: $licenseStateRequired
    licensesRequired: $licensesRequired
    locationId: $locationId
    longitude: $longitude
    minExpYear: $minExpYear
    minWeeklyPayAmount: $minWeeklyPayAmount
    profileRequirements: $profileRequirements
    recommendType: $recommendType
    requirementNotes: $requirementNotes
    scope: $scope
    shifts: $shifts
    skillId: $skillId
    skillLongName: $skillLongName
    skillName: $skillName
    slotsNumber: $slotsNumber
    slug: $slug
    source: $source
    specialty: $specialty
    startDate: $startDate
    state: $state
    templateName: $templateName
    title: $title
    weeklyPayAmount: $weeklyPayAmount
    zipcode: $zipcode
  ) {
    clientId
    companyId
    data {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    id
    templateName
  }
}
    `;
export const useCreateJobTemplateMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateJobTemplateMutation, TError, Types.CreateJobTemplateMutationVariables, TContext>) =>
    useMutation<Types.CreateJobTemplateMutation, TError, Types.CreateJobTemplateMutationVariables, TContext>(
      ['createJobTemplate'],
      (variables?: Types.CreateJobTemplateMutationVariables) => fetcher<Types.CreateJobTemplateMutation, Types.CreateJobTemplateMutationVariables>(CreateJobTemplateDocument, variables)(),
      options
    );
useCreateJobTemplateMutation.getKey = () => ['createJobTemplate'];

useCreateJobTemplateMutation.fetcher = (variables: Types.CreateJobTemplateMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateJobTemplateMutation, Types.CreateJobTemplateMutationVariables>(CreateJobTemplateDocument, variables, options);
export const CreateLocationDocument = `
    mutation createLocation($address: String, $addressState: String, $city: String, $clientId: String, $country: String, $latitude: BigDecimal, $longitude: BigDecimal, $name: String, $phone: String, $zipcode: String) {
  createLocation(
    address: $address
    addressState: $addressState
    city: $city
    clientId: $clientId
    country: $country
    latitude: $latitude
    longitude: $longitude
    name: $name
    phone: $phone
    zipcode: $zipcode
  ) {
    active
    address
    addressState
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    clientId
    companyId
    country
    distanceToCurrentUserSearchLocation
    id
    latitude
    longitude
    name
    phone
    region
    statusUpdatedAt
    statusUpdater {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    zipcode
  }
}
    `;
export const useCreateLocationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateLocationMutation, TError, Types.CreateLocationMutationVariables, TContext>) =>
    useMutation<Types.CreateLocationMutation, TError, Types.CreateLocationMutationVariables, TContext>(
      ['createLocation'],
      (variables?: Types.CreateLocationMutationVariables) => fetcher<Types.CreateLocationMutation, Types.CreateLocationMutationVariables>(CreateLocationDocument, variables)(),
      options
    );
useCreateLocationMutation.getKey = () => ['createLocation'];

useCreateLocationMutation.fetcher = (variables?: Types.CreateLocationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateLocationMutation, Types.CreateLocationMutationVariables>(CreateLocationDocument, variables, options);
export const CreateMessageDocument = `
    mutation createMessage($attachmentSignedBlobId: String, $message: String, $messageThreadId: String, $objectId: String, $objectType: MessageObjectTypeEnum, $receiverId: String!, $receiverType: MessageReceiverTypeEnum!) {
  createMessage(
    attachmentSignedBlobId: $attachmentSignedBlobId
    message: $message
    messageThreadId: $messageThreadId
    objectId: $objectId
    objectType: $objectType
    receiverId: $receiverId
    receiverType: $receiverType
  ) {
    message {
      createdAt
      id
      message
      objectId
      objectType
      status
    }
    messageThread {
      clientId
      companyId
      id
      lastMessage
      lastTimestamp
      objectId
      objectType
      threadIconUrl
      unreadMessageCounter
    }
  }
}
    `;
export const useCreateMessageMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateMessageMutation, TError, Types.CreateMessageMutationVariables, TContext>) =>
    useMutation<Types.CreateMessageMutation, TError, Types.CreateMessageMutationVariables, TContext>(
      ['createMessage'],
      (variables?: Types.CreateMessageMutationVariables) => fetcher<Types.CreateMessageMutation, Types.CreateMessageMutationVariables>(CreateMessageDocument, variables)(),
      options
    );
useCreateMessageMutation.getKey = () => ['createMessage'];

useCreateMessageMutation.fetcher = (variables: Types.CreateMessageMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateMessageMutation, Types.CreateMessageMutationVariables>(CreateMessageDocument, variables, options);
export const CreateMultiJobApplicantsDocument = `
    mutation createMultiJobApplicants($jobId: String!, $applicantTimeOffs: [ApplicantTimeOffArgument!], $jobIds: [String!]!, $note: String, $source: JobApplicantSourceEnum) {
  createMultiJobApplicants(
    applicantTimeOffs: $applicantTimeOffs
    jobIds: $jobIds
    note: $note
    source: $source
  ) {
    address
    address2
    applicantTimeOffs {
      endDate
      id
      startDate
    }
    applicationProcess
    applyDate
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkerAssignment {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    discipline
    duration
    durationType
    employerNote
    frequency
    id
    interview {
      address1
      address2
      city
      createdAt
      description
      employerNote
      id
      interviewEndTime
      interviewLink
      interviewStartTime
      interviewType
      note
      state
      status
      statusName
      statusUpdatedAt
      timezone
      title
      updateEvents
      updatedAt
      zipCode
    }
    isDirectOffer
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicantActivities {
      createdAt
      id
      owner
      statusChanged
      updatedAt
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    note
    offerDate
    payAmount
    shifts
    source
    specialty
    startDate
    startedStatus
    startedStatusName
    state
    status
    statusName
    statusUpdatedAt
    submittal {
      externalUpdatedAt
      id
      jobId
      status
      submittalDate
      workerId
    }
    timeOffEndDate
    timeOffStartDate
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerAssignments {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    zipcode
  }
}
    `;
export const useCreateMultiJobApplicantsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateMultiJobApplicantsMutation, TError, Types.CreateMultiJobApplicantsMutationVariables, TContext>) =>
    useMutation<Types.CreateMultiJobApplicantsMutation, TError, Types.CreateMultiJobApplicantsMutationVariables, TContext>(
      ['createMultiJobApplicants'],
      (variables?: Types.CreateMultiJobApplicantsMutationVariables) => fetcher<Types.CreateMultiJobApplicantsMutation, Types.CreateMultiJobApplicantsMutationVariables>(CreateMultiJobApplicantsDocument, variables)(),
      options
    );
useCreateMultiJobApplicantsMutation.getKey = () => ['createMultiJobApplicants'];

useCreateMultiJobApplicantsMutation.fetcher = (variables: Types.CreateMultiJobApplicantsMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateMultiJobApplicantsMutation, Types.CreateMultiJobApplicantsMutationVariables>(CreateMultiJobApplicantsDocument, variables, options);
export const CreateOnboardingPartDocument = `
    mutation createOnboardingPart($companyOnboardingId: String!, $description: String!, $name: String!, $quizId: String, $referenceUrl: String) {
  createOnboardingPart(
    companyOnboardingId: $companyOnboardingId
    description: $description
    name: $name
    quizId: $quizId
    referenceUrl: $referenceUrl
  ) {
    companyId
    companyOnboardingId
    confirmationMessage
    description
    failedMessage
    id
    integrationObject
    isEnabled
    name
    pendingMessage
    quizId
    referenceUrl
    workerOnboardingPart {
      id
      integration {
        __typename
        ... on GroupOnboardingPart {
          id
          state
        }
        ... on ProfileOnboarding {
          id
        }
        ... on UserTermsOfService {
          agreedAt
          id
        }
        ... on WorkExperienceOverview {
          discipline
          id
          primarySpecialty
          secondarySpecialty
          yearsOfExperience
        }
        ... on WorkerCertificationOverview {
          id
        }
        ... on WorkerEducationOverview {
          id
        }
        ... on WorkerReferenceOnboarding {
          id
        }
      }
      integrationConfigurations
      integrationObject
      state
      workerId
    }
  }
}
    `;
export const useCreateOnboardingPartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateOnboardingPartMutation, TError, Types.CreateOnboardingPartMutationVariables, TContext>) =>
    useMutation<Types.CreateOnboardingPartMutation, TError, Types.CreateOnboardingPartMutationVariables, TContext>(
      ['createOnboardingPart'],
      (variables?: Types.CreateOnboardingPartMutationVariables) => fetcher<Types.CreateOnboardingPartMutation, Types.CreateOnboardingPartMutationVariables>(CreateOnboardingPartDocument, variables)(),
      options
    );
useCreateOnboardingPartMutation.getKey = () => ['createOnboardingPart'];

useCreateOnboardingPartMutation.fetcher = (variables: Types.CreateOnboardingPartMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateOnboardingPartMutation, Types.CreateOnboardingPartMutationVariables>(CreateOnboardingPartDocument, variables, options);
export const CreateOrUpdateSupportDocumentDocument = `
    mutation createOrUpdateSupportDocument($size: [String!]!, $jobId: String!, $supportDocumentsAttributes: [SupportDocumentArgument!]!) {
  createOrUpdateSupportDocument(
    supportDocumentsAttributes: $supportDocumentsAttributes
  ) {
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
    document {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    documentType
    id
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useCreateOrUpdateSupportDocumentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateOrUpdateSupportDocumentMutation, TError, Types.CreateOrUpdateSupportDocumentMutationVariables, TContext>) =>
    useMutation<Types.CreateOrUpdateSupportDocumentMutation, TError, Types.CreateOrUpdateSupportDocumentMutationVariables, TContext>(
      ['createOrUpdateSupportDocument'],
      (variables?: Types.CreateOrUpdateSupportDocumentMutationVariables) => fetcher<Types.CreateOrUpdateSupportDocumentMutation, Types.CreateOrUpdateSupportDocumentMutationVariables>(CreateOrUpdateSupportDocumentDocument, variables)(),
      options
    );
useCreateOrUpdateSupportDocumentMutation.getKey = () => ['createOrUpdateSupportDocument'];

useCreateOrUpdateSupportDocumentMutation.fetcher = (variables: Types.CreateOrUpdateSupportDocumentMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateOrUpdateSupportDocumentMutation, Types.CreateOrUpdateSupportDocumentMutationVariables>(CreateOrUpdateSupportDocumentDocument, variables, options);
export const CreateOrUpdateWorkerResumesDocument = `
    mutation createOrUpdateWorkerResumes($size: [String!]!, $jobId: String!, $size1: [String!]!, $resumesSignedBlobIds: [String!]) {
  createOrUpdateWorkerResumes(resumesSignedBlobIds: $resumesSignedBlobIds) {
    agreedToTerms
    availableStartDate
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    avatarUrl
    blocked
    blockedClient {
      note
    }
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
    dateOfBirth
    email
    emergencyContact {
      contactName
      contactPhone
      contactRelationship
      id
      workerId
    }
    employmentType
    facilityTypes
    firstName
    hasActiveAssignment
    id
    isFavorited
    jobCategoriesWorkedNumber
    jobMatchingScore(jobId: $jobId)
    lastName
    lastOtpExpiredAt
    lastSignInAt
    locationsWorkedNumber
    maidenName
    noCall
    noEmail
    noNotification
    noSms
    noTalentMatches
    notificationSetting {
      assignmentEndingReminder
      completeOnboarding
      documentExpired
      id
      interviewInvitationExpired
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
    profilePercentageCompleted
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
    remainingExpirationTime
    resumes {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size1)
      thumbnails
    }
    shiftRequested
    socialSecurityNumber
    supportDocuments {
      documentType
      id
    }
    timeOffRequested
    totalUnreadMessage
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
    workerCertifications {
      certificationType
      compactLicense
      createdAt
      expirationDate
      id
      licenseDiscipline
      licenseNumber
      licenseState
      title
    }
    workerEducations {
      city
      country
      createdAt
      degreeDate
      degreeName
      id
      major
      schoolName
      state
    }
    workerNotes {
      id
      note
      noteType
    }
    workerOnboardings {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
    workerReferences {
      city
      contactEmail
      contactFirstName
      contactFullName
      contactLastName
      contactPhone
      createdAt
      facilityName
      id
      jobTitle
      refType
      relationship
      salutation
      state
      workedFrom
      workedTo
    }
    workerSpecialties {
      category
      completedChecklist
      id
      isExpired
      isPrimary
      specialty
      specialtyId
      specialtyLongName
      status
    }
    workingAuthorization {
      dateOfBirth
      id
      idPhotoUrl
      legalRightToWork
      socialSecurityNumber
      workerId
    }
    workingPreferredLocations {
      id
      preferredWorkingCity
      preferredWorkingState
    }
  }
}
    `;
export const useCreateOrUpdateWorkerResumesMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateOrUpdateWorkerResumesMutation, TError, Types.CreateOrUpdateWorkerResumesMutationVariables, TContext>) =>
    useMutation<Types.CreateOrUpdateWorkerResumesMutation, TError, Types.CreateOrUpdateWorkerResumesMutationVariables, TContext>(
      ['createOrUpdateWorkerResumes'],
      (variables?: Types.CreateOrUpdateWorkerResumesMutationVariables) => fetcher<Types.CreateOrUpdateWorkerResumesMutation, Types.CreateOrUpdateWorkerResumesMutationVariables>(CreateOrUpdateWorkerResumesDocument, variables)(),
      options
    );
useCreateOrUpdateWorkerResumesMutation.getKey = () => ['createOrUpdateWorkerResumes'];

useCreateOrUpdateWorkerResumesMutation.fetcher = (variables: Types.CreateOrUpdateWorkerResumesMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateOrUpdateWorkerResumesMutation, Types.CreateOrUpdateWorkerResumesMutationVariables>(CreateOrUpdateWorkerResumesDocument, variables, options);
export const CreateOrUpdateWorkerSpecialtyDocument = `
    mutation createOrUpdateWorkerSpecialty($jobId: String!, $workerSpecialtiesAttributes: [WorkerSpecialtyArgument!]!) {
  createOrUpdateWorkerSpecialty(
    workerSpecialtiesAttributes: $workerSpecialtiesAttributes
  ) {
    category
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
    completedChecklist
    id
    isExpired
    isPrimary
    specialty
    specialtyId
    specialtyLongName
    status
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerSkillChecklistSections {
      id
      name
    }
  }
}
    `;
export const useCreateOrUpdateWorkerSpecialtyMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateOrUpdateWorkerSpecialtyMutation, TError, Types.CreateOrUpdateWorkerSpecialtyMutationVariables, TContext>) =>
    useMutation<Types.CreateOrUpdateWorkerSpecialtyMutation, TError, Types.CreateOrUpdateWorkerSpecialtyMutationVariables, TContext>(
      ['createOrUpdateWorkerSpecialty'],
      (variables?: Types.CreateOrUpdateWorkerSpecialtyMutationVariables) => fetcher<Types.CreateOrUpdateWorkerSpecialtyMutation, Types.CreateOrUpdateWorkerSpecialtyMutationVariables>(CreateOrUpdateWorkerSpecialtyDocument, variables)(),
      options
    );
useCreateOrUpdateWorkerSpecialtyMutation.getKey = () => ['createOrUpdateWorkerSpecialty'];

useCreateOrUpdateWorkerSpecialtyMutation.fetcher = (variables: Types.CreateOrUpdateWorkerSpecialtyMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateOrUpdateWorkerSpecialtyMutation, Types.CreateOrUpdateWorkerSpecialtyMutationVariables>(CreateOrUpdateWorkerSpecialtyDocument, variables, options);
export const CreateReferredTravelerDocument = `
    mutation createReferredTraveler($deviceId: String, $discipline: String, $email: String!, $firstName: String!, $jobId: String, $lastName: String!, $phone: String, $recruiterId: String, $referralPath: String, $referrerEmail: String, $referrerFirstName: String, $referrerLastName: String, $referrerPhone: String, $relationship: ReferredTravelerRelationshipEnum, $source: SignupSourceEnum) {
  createReferredTraveler(
    deviceId: $deviceId
    discipline: $discipline
    email: $email
    firstName: $firstName
    jobId: $jobId
    lastName: $lastName
    phone: $phone
    recruiterId: $recruiterId
    referralPath: $referralPath
    referrerEmail: $referrerEmail
    referrerFirstName: $referrerFirstName
    referrerLastName: $referrerLastName
    referrerPhone: $referrerPhone
    relationship: $relationship
    source: $source
  ) {
    success
  }
}
    `;
export const useCreateReferredTravelerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateReferredTravelerMutation, TError, Types.CreateReferredTravelerMutationVariables, TContext>) =>
    useMutation<Types.CreateReferredTravelerMutation, TError, Types.CreateReferredTravelerMutationVariables, TContext>(
      ['createReferredTraveler'],
      (variables?: Types.CreateReferredTravelerMutationVariables) => fetcher<Types.CreateReferredTravelerMutation, Types.CreateReferredTravelerMutationVariables>(CreateReferredTravelerDocument, variables)(),
      options
    );
useCreateReferredTravelerMutation.getKey = () => ['createReferredTraveler'];

useCreateReferredTravelerMutation.fetcher = (variables: Types.CreateReferredTravelerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateReferredTravelerMutation, Types.CreateReferredTravelerMutationVariables>(CreateReferredTravelerDocument, variables, options);
export const CreateSavedFilterDocument = `
    mutation createSavedFilter($jobId: String!, $filterConditions: JobFilter, $savedFilter: SavedFilterArgument) {
  createSavedFilter(
    filterConditions: $filterConditions
    savedFilter: $savedFilter
  ) {
    alertChannel
    alertEmail
    alertFirstName
    alertLastName
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
    companyId
    deviceId
    enableAlert
    filterCondition {
      companyId
      disciplines
      exclusiveJob
      externalId
      facilityTypes
      id
      jobTypes
      locationCities
      locationStates
      maxWage
      minMatchingPercentage
      minWage
      nearBy
      shifts
      specialties
      startDate
      workerId
    }
    frequency
    id
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    lastAlertedAt
    name
    pauseAlert
    pauseAlertPeriod
    pauseAlertUntil
    startPauseAlertDate
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerId
  }
}
    `;
export const useCreateSavedFilterMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateSavedFilterMutation, TError, Types.CreateSavedFilterMutationVariables, TContext>) =>
    useMutation<Types.CreateSavedFilterMutation, TError, Types.CreateSavedFilterMutationVariables, TContext>(
      ['createSavedFilter'],
      (variables?: Types.CreateSavedFilterMutationVariables) => fetcher<Types.CreateSavedFilterMutation, Types.CreateSavedFilterMutationVariables>(CreateSavedFilterDocument, variables)(),
      options
    );
useCreateSavedFilterMutation.getKey = () => ['createSavedFilter'];

useCreateSavedFilterMutation.fetcher = (variables: Types.CreateSavedFilterMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateSavedFilterMutation, Types.CreateSavedFilterMutationVariables>(CreateSavedFilterDocument, variables, options);
export const CreateWorkExperienceDocument = `
    mutation createWorkExperience($agency: String, $assignmentType: String, $bedsInUnit: Int, $birthsPerMonth: String, $chartingSoftwareUsed: String, $city: String, $country: String, $currentlyEmployed: Boolean, $dailyCensus: Float, $dutiesPerformed: String, $endDate: ISO8601Date, $facilityName: String!, $facilityType: String, $floatSpecialty: String, $id: String, $mayContactSupervisor: Boolean, $numberSuites: Float, $nurseRatio: String, $patientRatio: String, $patientType: String, $position: String, $reasonForLeaving: String, $startDate: ISO8601Date!, $state: String, $supervisor: String, $travelAssignment: Boolean, $unitSpecialty: String, $zipcode: String) {
  createWorkExperience(
    agency: $agency
    assignmentType: $assignmentType
    bedsInUnit: $bedsInUnit
    birthsPerMonth: $birthsPerMonth
    chartingSoftwareUsed: $chartingSoftwareUsed
    city: $city
    country: $country
    currentlyEmployed: $currentlyEmployed
    dailyCensus: $dailyCensus
    dutiesPerformed: $dutiesPerformed
    endDate: $endDate
    facilityName: $facilityName
    facilityType: $facilityType
    floatSpecialty: $floatSpecialty
    id: $id
    mayContactSupervisor: $mayContactSupervisor
    numberSuites: $numberSuites
    nurseRatio: $nurseRatio
    patientRatio: $patientRatio
    patientType: $patientType
    position: $position
    reasonForLeaving: $reasonForLeaving
    startDate: $startDate
    state: $state
    supervisor: $supervisor
    travelAssignment: $travelAssignment
    unitSpecialty: $unitSpecialty
    zipcode: $zipcode
  ) {
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
}
    `;
export const useCreateWorkExperienceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateWorkExperienceMutation, TError, Types.CreateWorkExperienceMutationVariables, TContext>) =>
    useMutation<Types.CreateWorkExperienceMutation, TError, Types.CreateWorkExperienceMutationVariables, TContext>(
      ['createWorkExperience'],
      (variables?: Types.CreateWorkExperienceMutationVariables) => fetcher<Types.CreateWorkExperienceMutation, Types.CreateWorkExperienceMutationVariables>(CreateWorkExperienceDocument, variables)(),
      options
    );
useCreateWorkExperienceMutation.getKey = () => ['createWorkExperience'];

useCreateWorkExperienceMutation.fetcher = (variables: Types.CreateWorkExperienceMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateWorkExperienceMutation, Types.CreateWorkExperienceMutationVariables>(CreateWorkExperienceDocument, variables, options);
export const CreateWorkedTimesheetDocument = `
    mutation createWorkedTimesheet($size: [String!]!, $timesheetImagesSignedBlobIds: [String!]) {
  createWorkedTimesheet(
    timesheetImagesSignedBlobIds: $timesheetImagesSignedBlobIds
  ) {
    id
    timesheetImages {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
  }
}
    `;
export const useCreateWorkedTimesheetMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateWorkedTimesheetMutation, TError, Types.CreateWorkedTimesheetMutationVariables, TContext>) =>
    useMutation<Types.CreateWorkedTimesheetMutation, TError, Types.CreateWorkedTimesheetMutationVariables, TContext>(
      ['createWorkedTimesheet'],
      (variables?: Types.CreateWorkedTimesheetMutationVariables) => fetcher<Types.CreateWorkedTimesheetMutation, Types.CreateWorkedTimesheetMutationVariables>(CreateWorkedTimesheetDocument, variables)(),
      options
    );
useCreateWorkedTimesheetMutation.getKey = () => ['createWorkedTimesheet'];

useCreateWorkedTimesheetMutation.fetcher = (variables: Types.CreateWorkedTimesheetMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateWorkedTimesheetMutation, Types.CreateWorkedTimesheetMutationVariables>(CreateWorkedTimesheetDocument, variables, options);
export const CreateWorkerBlockDocument = `
    mutation createWorkerBlock($jobId: String!, $clientId: String, $note: String!, $workerId: String!) {
  createWorkerBlock(clientId: $clientId, note: $note, workerId: $workerId) {
    blockedLevel
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    clientId
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
    companyId
    createdAt
    employer {
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
    employerId
    id
    note
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerId
  }
}
    `;
export const useCreateWorkerBlockMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateWorkerBlockMutation, TError, Types.CreateWorkerBlockMutationVariables, TContext>) =>
    useMutation<Types.CreateWorkerBlockMutation, TError, Types.CreateWorkerBlockMutationVariables, TContext>(
      ['createWorkerBlock'],
      (variables?: Types.CreateWorkerBlockMutationVariables) => fetcher<Types.CreateWorkerBlockMutation, Types.CreateWorkerBlockMutationVariables>(CreateWorkerBlockDocument, variables)(),
      options
    );
useCreateWorkerBlockMutation.getKey = () => ['createWorkerBlock'];

useCreateWorkerBlockMutation.fetcher = (variables: Types.CreateWorkerBlockMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateWorkerBlockMutation, Types.CreateWorkerBlockMutationVariables>(CreateWorkerBlockDocument, variables, options);
export const CreateWorkerCertificationDocument = `
    mutation createWorkerCertification($size: [String!]!, $jobId: String!, $_destroy: Boolean, $certificationType: String!, $compactLicense: Boolean, $expirationDate: ISO8601Date, $id: String, $licenseDiscipline: String, $licenseImages: [FileArgument!], $licenseImagesSignedBlobIds: [String!], $licenseNumber: String, $licenseState: String, $title: String) {
  createWorkerCertification(
    _destroy: $_destroy
    certificationType: $certificationType
    compactLicense: $compactLicense
    expirationDate: $expirationDate
    id: $id
    licenseDiscipline: $licenseDiscipline
    licenseImages: $licenseImages
    licenseImagesSignedBlobIds: $licenseImagesSignedBlobIds
    licenseNumber: $licenseNumber
    licenseState: $licenseState
    title: $title
  ) {
    certificationType
    compactLicense
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
    createdAt
    expirationDate
    id
    licenseDiscipline
    licenseImages {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    licenseNumber
    licenseState
    title
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useCreateWorkerCertificationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateWorkerCertificationMutation, TError, Types.CreateWorkerCertificationMutationVariables, TContext>) =>
    useMutation<Types.CreateWorkerCertificationMutation, TError, Types.CreateWorkerCertificationMutationVariables, TContext>(
      ['createWorkerCertification'],
      (variables?: Types.CreateWorkerCertificationMutationVariables) => fetcher<Types.CreateWorkerCertificationMutation, Types.CreateWorkerCertificationMutationVariables>(CreateWorkerCertificationDocument, variables)(),
      options
    );
useCreateWorkerCertificationMutation.getKey = () => ['createWorkerCertification'];

useCreateWorkerCertificationMutation.fetcher = (variables: Types.CreateWorkerCertificationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateWorkerCertificationMutation, Types.CreateWorkerCertificationMutationVariables>(CreateWorkerCertificationDocument, variables, options);
export const CreateWorkerEducationDocument = `
    mutation createWorkerEducation($jobId: String!, $_destroy: Boolean, $city: String, $country: String, $degreeDate: ISO8601Date, $degreeName: String, $id: String, $major: String, $schoolName: String, $state: String) {
  createWorkerEducation(
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
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
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

useCreateWorkerEducationMutation.fetcher = (variables: Types.CreateWorkerEducationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateWorkerEducationMutation, Types.CreateWorkerEducationMutationVariables>(CreateWorkerEducationDocument, variables, options);
export const CreateWorkerOnboardingDocument = `
    mutation createWorkerOnboarding($jobId: String!, $companyOnboardingId: String!, $workerId: String) {
  createWorkerOnboarding(
    companyOnboardingId: $companyOnboardingId
    workerId: $workerId
  ) {
    companyOnboardingId
    currentPartIndex
    id
    message
    numOfCompletedSteps
    pendingWorkerOnboardingPart {
      id
      integration {
        __typename
        ... on GroupOnboardingPart {
          id
          state
        }
        ... on ProfileOnboarding {
          id
        }
        ... on UserTermsOfService {
          agreedAt
          id
        }
        ... on WorkExperienceOverview {
          discipline
          id
          primarySpecialty
          secondarySpecialty
          yearsOfExperience
        }
        ... on WorkerCertificationOverview {
          id
        }
        ... on WorkerEducationOverview {
          id
        }
        ... on WorkerReferenceOnboarding {
          id
        }
      }
      integrationConfigurations
      integrationObject
      state
      workerId
    }
    percentageCompleted
    permittedEvents
    state
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useCreateWorkerOnboardingMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateWorkerOnboardingMutation, TError, Types.CreateWorkerOnboardingMutationVariables, TContext>) =>
    useMutation<Types.CreateWorkerOnboardingMutation, TError, Types.CreateWorkerOnboardingMutationVariables, TContext>(
      ['createWorkerOnboarding'],
      (variables?: Types.CreateWorkerOnboardingMutationVariables) => fetcher<Types.CreateWorkerOnboardingMutation, Types.CreateWorkerOnboardingMutationVariables>(CreateWorkerOnboardingDocument, variables)(),
      options
    );
useCreateWorkerOnboardingMutation.getKey = () => ['createWorkerOnboarding'];

useCreateWorkerOnboardingMutation.fetcher = (variables: Types.CreateWorkerOnboardingMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateWorkerOnboardingMutation, Types.CreateWorkerOnboardingMutationVariables>(CreateWorkerOnboardingDocument, variables, options);
export const CreateWorkerQuizDocument = `
    mutation createWorkerQuiz($quizAnswerIds: [String!]!, $quizId: String!, $workerId: String!) {
  createWorkerQuiz(
    quizAnswerIds: $quizAnswerIds
    quizId: $quizId
    workerId: $workerId
  ) {
    correctionPercentage
    id
    quiz {
      companyId
      description
      id
      name
      passingPercentage
      quizQuestionsNumber
    }
    state
    workerId
    workerQuizAnswers {
      id
      quizAnswerId
      workerId
    }
  }
}
    `;
export const useCreateWorkerQuizMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateWorkerQuizMutation, TError, Types.CreateWorkerQuizMutationVariables, TContext>) =>
    useMutation<Types.CreateWorkerQuizMutation, TError, Types.CreateWorkerQuizMutationVariables, TContext>(
      ['createWorkerQuiz'],
      (variables?: Types.CreateWorkerQuizMutationVariables) => fetcher<Types.CreateWorkerQuizMutation, Types.CreateWorkerQuizMutationVariables>(CreateWorkerQuizDocument, variables)(),
      options
    );
useCreateWorkerQuizMutation.getKey = () => ['createWorkerQuiz'];

useCreateWorkerQuizMutation.fetcher = (variables: Types.CreateWorkerQuizMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateWorkerQuizMutation, Types.CreateWorkerQuizMutationVariables>(CreateWorkerQuizDocument, variables, options);
export const CreateWorkerReferenceDocument = `
    mutation createWorkerReference($jobId: String!, $_destroy: Boolean, $city: String, $contactEmail: String!, $contactFirstName: String!, $contactFullName: String, $contactLastName: String!, $contactPhone: String!, $facilityName: String!, $jobTitle: String!, $refType: WorkerReferenceTypeEnum!, $relationship: String, $salutation: WorkerReferenceSalutationEnum, $state: String, $workedFrom: ISO8601Date, $workedTo: ISO8601Date) {
  createWorkerReference(
    _destroy: $_destroy
    city: $city
    contactEmail: $contactEmail
    contactFirstName: $contactFirstName
    contactFullName: $contactFullName
    contactLastName: $contactLastName
    contactPhone: $contactPhone
    facilityName: $facilityName
    jobTitle: $jobTitle
    refType: $refType
    relationship: $relationship
    salutation: $salutation
    state: $state
    workedFrom: $workedFrom
    workedTo: $workedTo
  ) {
    city
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
    contactEmail
    contactFirstName
    contactFullName
    contactLastName
    contactPhone
    createdAt
    facilityName
    id
    jobTitle
    refType
    relationship
    salutation
    state
    workedFrom
    workedTo
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useCreateWorkerReferenceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateWorkerReferenceMutation, TError, Types.CreateWorkerReferenceMutationVariables, TContext>) =>
    useMutation<Types.CreateWorkerReferenceMutation, TError, Types.CreateWorkerReferenceMutationVariables, TContext>(
      ['createWorkerReference'],
      (variables?: Types.CreateWorkerReferenceMutationVariables) => fetcher<Types.CreateWorkerReferenceMutation, Types.CreateWorkerReferenceMutationVariables>(CreateWorkerReferenceDocument, variables)(),
      options
    );
useCreateWorkerReferenceMutation.getKey = () => ['createWorkerReference'];

useCreateWorkerReferenceMutation.fetcher = (variables: Types.CreateWorkerReferenceMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateWorkerReferenceMutation, Types.CreateWorkerReferenceMutationVariables>(CreateWorkerReferenceDocument, variables, options);
export const CreateWorkingAuthorizationDocument = `
    mutation createWorkingAuthorization($dateOfBirth: ISO8601Date, $idPhotoBase64: String!, $idPhotoFileName: String!, $legalRightToWork: Boolean!, $socialSecurityNumber: String, $workerId: String!) {
  createWorkingAuthorization(
    dateOfBirth: $dateOfBirth
    idPhotoBase64: $idPhotoBase64
    idPhotoFileName: $idPhotoFileName
    legalRightToWork: $legalRightToWork
    socialSecurityNumber: $socialSecurityNumber
    workerId: $workerId
  ) {
    dateOfBirth
    id
    idPhotoUrl
    legalRightToWork
    socialSecurityNumber
    workerId
  }
}
    `;
export const useCreateWorkingAuthorizationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.CreateWorkingAuthorizationMutation, TError, Types.CreateWorkingAuthorizationMutationVariables, TContext>) =>
    useMutation<Types.CreateWorkingAuthorizationMutation, TError, Types.CreateWorkingAuthorizationMutationVariables, TContext>(
      ['createWorkingAuthorization'],
      (variables?: Types.CreateWorkingAuthorizationMutationVariables) => fetcher<Types.CreateWorkingAuthorizationMutation, Types.CreateWorkingAuthorizationMutationVariables>(CreateWorkingAuthorizationDocument, variables)(),
      options
    );
useCreateWorkingAuthorizationMutation.getKey = () => ['createWorkingAuthorization'];

useCreateWorkingAuthorizationMutation.fetcher = (variables: Types.CreateWorkingAuthorizationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.CreateWorkingAuthorizationMutation, Types.CreateWorkingAuthorizationMutationVariables>(CreateWorkingAuthorizationDocument, variables, options);
export const DeactiveClientDocument = `
    mutation deactiveClient($deactiveReason: String!, $id: String!) {
  deactiveClient(deactiveReason: $deactiveReason, id: $id) {
    success
  }
}
    `;
export const useDeactiveClientMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DeactiveClientMutation, TError, Types.DeactiveClientMutationVariables, TContext>) =>
    useMutation<Types.DeactiveClientMutation, TError, Types.DeactiveClientMutationVariables, TContext>(
      ['deactiveClient'],
      (variables?: Types.DeactiveClientMutationVariables) => fetcher<Types.DeactiveClientMutation, Types.DeactiveClientMutationVariables>(DeactiveClientDocument, variables)(),
      options
    );
useDeactiveClientMutation.getKey = () => ['deactiveClient'];

useDeactiveClientMutation.fetcher = (variables: Types.DeactiveClientMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DeactiveClientMutation, Types.DeactiveClientMutationVariables>(DeactiveClientDocument, variables, options);
export const DeactiveLocationDocument = `
    mutation deactiveLocation($id: String!) {
  deactiveLocation(id: $id) {
    active
    address
    addressState
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    clientId
    companyId
    country
    distanceToCurrentUserSearchLocation
    id
    latitude
    longitude
    name
    phone
    region
    statusUpdatedAt
    statusUpdater {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    zipcode
  }
}
    `;
export const useDeactiveLocationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DeactiveLocationMutation, TError, Types.DeactiveLocationMutationVariables, TContext>) =>
    useMutation<Types.DeactiveLocationMutation, TError, Types.DeactiveLocationMutationVariables, TContext>(
      ['deactiveLocation'],
      (variables?: Types.DeactiveLocationMutationVariables) => fetcher<Types.DeactiveLocationMutation, Types.DeactiveLocationMutationVariables>(DeactiveLocationDocument, variables)(),
      options
    );
useDeactiveLocationMutation.getKey = () => ['deactiveLocation'];

useDeactiveLocationMutation.fetcher = (variables: Types.DeactiveLocationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DeactiveLocationMutation, Types.DeactiveLocationMutationVariables>(DeactiveLocationDocument, variables, options);
export const DestroyDraftJobDocument = `
    mutation destroyDraftJob($id: String!) {
  destroyDraftJob(id: $id) {
    success
  }
}
    `;
export const useDestroyDraftJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyDraftJobMutation, TError, Types.DestroyDraftJobMutationVariables, TContext>) =>
    useMutation<Types.DestroyDraftJobMutation, TError, Types.DestroyDraftJobMutationVariables, TContext>(
      ['destroyDraftJob'],
      (variables?: Types.DestroyDraftJobMutationVariables) => fetcher<Types.DestroyDraftJobMutation, Types.DestroyDraftJobMutationVariables>(DestroyDraftJobDocument, variables)(),
      options
    );
useDestroyDraftJobMutation.getKey = () => ['destroyDraftJob'];

useDestroyDraftJobMutation.fetcher = (variables: Types.DestroyDraftJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyDraftJobMutation, Types.DestroyDraftJobMutationVariables>(DestroyDraftJobDocument, variables, options);
export const DestroyFileDocument = `
    mutation destroyFile($id: String!) {
  destroyFile(id: $id) {
    id
    success
  }
}
    `;
export const useDestroyFileMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyFileMutation, TError, Types.DestroyFileMutationVariables, TContext>) =>
    useMutation<Types.DestroyFileMutation, TError, Types.DestroyFileMutationVariables, TContext>(
      ['destroyFile'],
      (variables?: Types.DestroyFileMutationVariables) => fetcher<Types.DestroyFileMutation, Types.DestroyFileMutationVariables>(DestroyFileDocument, variables)(),
      options
    );
useDestroyFileMutation.getKey = () => ['destroyFile'];

useDestroyFileMutation.fetcher = (variables: Types.DestroyFileMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyFileMutation, Types.DestroyFileMutationVariables>(DestroyFileDocument, variables, options);
export const DestroyFilesDocument = `
    mutation destroyFiles($ids: [String!]!) {
  destroyFiles(ids: $ids) {
    ids
    success
  }
}
    `;
export const useDestroyFilesMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyFilesMutation, TError, Types.DestroyFilesMutationVariables, TContext>) =>
    useMutation<Types.DestroyFilesMutation, TError, Types.DestroyFilesMutationVariables, TContext>(
      ['destroyFiles'],
      (variables?: Types.DestroyFilesMutationVariables) => fetcher<Types.DestroyFilesMutation, Types.DestroyFilesMutationVariables>(DestroyFilesDocument, variables)(),
      options
    );
useDestroyFilesMutation.getKey = () => ['destroyFiles'];

useDestroyFilesMutation.fetcher = (variables: Types.DestroyFilesMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyFilesMutation, Types.DestroyFilesMutationVariables>(DestroyFilesDocument, variables, options);
export const DestroyJobTemplateDocument = `
    mutation destroyJobTemplate($id: String!) {
  destroyJobTemplate(id: $id) {
    id
    success
  }
}
    `;
export const useDestroyJobTemplateMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyJobTemplateMutation, TError, Types.DestroyJobTemplateMutationVariables, TContext>) =>
    useMutation<Types.DestroyJobTemplateMutation, TError, Types.DestroyJobTemplateMutationVariables, TContext>(
      ['destroyJobTemplate'],
      (variables?: Types.DestroyJobTemplateMutationVariables) => fetcher<Types.DestroyJobTemplateMutation, Types.DestroyJobTemplateMutationVariables>(DestroyJobTemplateDocument, variables)(),
      options
    );
useDestroyJobTemplateMutation.getKey = () => ['destroyJobTemplate'];

useDestroyJobTemplateMutation.fetcher = (variables: Types.DestroyJobTemplateMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyJobTemplateMutation, Types.DestroyJobTemplateMutationVariables>(DestroyJobTemplateDocument, variables, options);
export const DestroySavedFilterDocument = `
    mutation destroySavedFilter($savedFilter: SavedFilterArgument) {
  destroySavedFilter(savedFilter: $savedFilter) {
    id
    success
  }
}
    `;
export const useDestroySavedFilterMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroySavedFilterMutation, TError, Types.DestroySavedFilterMutationVariables, TContext>) =>
    useMutation<Types.DestroySavedFilterMutation, TError, Types.DestroySavedFilterMutationVariables, TContext>(
      ['destroySavedFilter'],
      (variables?: Types.DestroySavedFilterMutationVariables) => fetcher<Types.DestroySavedFilterMutation, Types.DestroySavedFilterMutationVariables>(DestroySavedFilterDocument, variables)(),
      options
    );
useDestroySavedFilterMutation.getKey = () => ['destroySavedFilter'];

useDestroySavedFilterMutation.fetcher = (variables?: Types.DestroySavedFilterMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroySavedFilterMutation, Types.DestroySavedFilterMutationVariables>(DestroySavedFilterDocument, variables, options);
export const DestroyWorkExperienceDocument = `
    mutation destroyWorkExperience($id: String!) {
  destroyWorkExperience(id: $id) {
    id
    success
  }
}
    `;
export const useDestroyWorkExperienceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyWorkExperienceMutation, TError, Types.DestroyWorkExperienceMutationVariables, TContext>) =>
    useMutation<Types.DestroyWorkExperienceMutation, TError, Types.DestroyWorkExperienceMutationVariables, TContext>(
      ['destroyWorkExperience'],
      (variables?: Types.DestroyWorkExperienceMutationVariables) => fetcher<Types.DestroyWorkExperienceMutation, Types.DestroyWorkExperienceMutationVariables>(DestroyWorkExperienceDocument, variables)(),
      options
    );
useDestroyWorkExperienceMutation.getKey = () => ['destroyWorkExperience'];

useDestroyWorkExperienceMutation.fetcher = (variables: Types.DestroyWorkExperienceMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyWorkExperienceMutation, Types.DestroyWorkExperienceMutationVariables>(DestroyWorkExperienceDocument, variables, options);
export const DestroyWorkedShiftDocument = `
    mutation destroyWorkedShift($id: String!) {
  destroyWorkedShift(id: $id) {
    id
    success
  }
}
    `;
export const useDestroyWorkedShiftMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyWorkedShiftMutation, TError, Types.DestroyWorkedShiftMutationVariables, TContext>) =>
    useMutation<Types.DestroyWorkedShiftMutation, TError, Types.DestroyWorkedShiftMutationVariables, TContext>(
      ['destroyWorkedShift'],
      (variables?: Types.DestroyWorkedShiftMutationVariables) => fetcher<Types.DestroyWorkedShiftMutation, Types.DestroyWorkedShiftMutationVariables>(DestroyWorkedShiftDocument, variables)(),
      options
    );
useDestroyWorkedShiftMutation.getKey = () => ['destroyWorkedShift'];

useDestroyWorkedShiftMutation.fetcher = (variables: Types.DestroyWorkedShiftMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyWorkedShiftMutation, Types.DestroyWorkedShiftMutationVariables>(DestroyWorkedShiftDocument, variables, options);
export const DestroyWorkerCertificationDocument = `
    mutation destroyWorkerCertification($id: String!) {
  destroyWorkerCertification(id: $id) {
    id
    success
  }
}
    `;
export const useDestroyWorkerCertificationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyWorkerCertificationMutation, TError, Types.DestroyWorkerCertificationMutationVariables, TContext>) =>
    useMutation<Types.DestroyWorkerCertificationMutation, TError, Types.DestroyWorkerCertificationMutationVariables, TContext>(
      ['destroyWorkerCertification'],
      (variables?: Types.DestroyWorkerCertificationMutationVariables) => fetcher<Types.DestroyWorkerCertificationMutation, Types.DestroyWorkerCertificationMutationVariables>(DestroyWorkerCertificationDocument, variables)(),
      options
    );
useDestroyWorkerCertificationMutation.getKey = () => ['destroyWorkerCertification'];

useDestroyWorkerCertificationMutation.fetcher = (variables: Types.DestroyWorkerCertificationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyWorkerCertificationMutation, Types.DestroyWorkerCertificationMutationVariables>(DestroyWorkerCertificationDocument, variables, options);
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
export const DestroyWorkerExpenseDocument = `
    mutation destroyWorkerExpense($id: String!) {
  destroyWorkerExpense(id: $id) {
    id
    success
  }
}
    `;
export const useDestroyWorkerExpenseMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyWorkerExpenseMutation, TError, Types.DestroyWorkerExpenseMutationVariables, TContext>) =>
    useMutation<Types.DestroyWorkerExpenseMutation, TError, Types.DestroyWorkerExpenseMutationVariables, TContext>(
      ['destroyWorkerExpense'],
      (variables?: Types.DestroyWorkerExpenseMutationVariables) => fetcher<Types.DestroyWorkerExpenseMutation, Types.DestroyWorkerExpenseMutationVariables>(DestroyWorkerExpenseDocument, variables)(),
      options
    );
useDestroyWorkerExpenseMutation.getKey = () => ['destroyWorkerExpense'];

useDestroyWorkerExpenseMutation.fetcher = (variables: Types.DestroyWorkerExpenseMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyWorkerExpenseMutation, Types.DestroyWorkerExpenseMutationVariables>(DestroyWorkerExpenseDocument, variables, options);
export const DestroyWorkerReferenceDocument = `
    mutation destroyWorkerReference($id: String!) {
  destroyWorkerReference(id: $id) {
    id
    success
  }
}
    `;
export const useDestroyWorkerReferenceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyWorkerReferenceMutation, TError, Types.DestroyWorkerReferenceMutationVariables, TContext>) =>
    useMutation<Types.DestroyWorkerReferenceMutation, TError, Types.DestroyWorkerReferenceMutationVariables, TContext>(
      ['destroyWorkerReference'],
      (variables?: Types.DestroyWorkerReferenceMutationVariables) => fetcher<Types.DestroyWorkerReferenceMutation, Types.DestroyWorkerReferenceMutationVariables>(DestroyWorkerReferenceDocument, variables)(),
      options
    );
useDestroyWorkerReferenceMutation.getKey = () => ['destroyWorkerReference'];

useDestroyWorkerReferenceMutation.fetcher = (variables: Types.DestroyWorkerReferenceMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyWorkerReferenceMutation, Types.DestroyWorkerReferenceMutationVariables>(DestroyWorkerReferenceDocument, variables, options);
export const DestroyWorkerSpecialtyDocument = `
    mutation destroyWorkerSpecialty($id: String!) {
  destroyWorkerSpecialty(id: $id) {
    id
    success
  }
}
    `;
export const useDestroyWorkerSpecialtyMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DestroyWorkerSpecialtyMutation, TError, Types.DestroyWorkerSpecialtyMutationVariables, TContext>) =>
    useMutation<Types.DestroyWorkerSpecialtyMutation, TError, Types.DestroyWorkerSpecialtyMutationVariables, TContext>(
      ['destroyWorkerSpecialty'],
      (variables?: Types.DestroyWorkerSpecialtyMutationVariables) => fetcher<Types.DestroyWorkerSpecialtyMutation, Types.DestroyWorkerSpecialtyMutationVariables>(DestroyWorkerSpecialtyDocument, variables)(),
      options
    );
useDestroyWorkerSpecialtyMutation.getKey = () => ['destroyWorkerSpecialty'];

useDestroyWorkerSpecialtyMutation.fetcher = (variables: Types.DestroyWorkerSpecialtyMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DestroyWorkerSpecialtyMutation, Types.DestroyWorkerSpecialtyMutationVariables>(DestroyWorkerSpecialtyDocument, variables, options);
export const DirectOfferDocument = `
    mutation directOffer($jobId: String!, $clientId: String, $employerNote: String, $jobApplicantId: String, $jobId1: String, $manualJobInformations: DirectOfferArgument, $source: JobApplicantSourceEnum, $workerId: String!) {
  directOffer(
    clientId: $clientId
    employerNote: $employerNote
    jobApplicantId: $jobApplicantId
    jobId: $jobId1
    manualJobInformations: $manualJobInformations
    source: $source
    workerId: $workerId
  ) {
    address
    address2
    applicantTimeOffs {
      endDate
      id
      startDate
    }
    applicationProcess
    applyDate
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkerAssignment {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    discipline
    duration
    durationType
    employerNote
    frequency
    id
    interview {
      address1
      address2
      city
      createdAt
      description
      employerNote
      id
      interviewEndTime
      interviewLink
      interviewStartTime
      interviewType
      note
      state
      status
      statusName
      statusUpdatedAt
      timezone
      title
      updateEvents
      updatedAt
      zipCode
    }
    isDirectOffer
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicantActivities {
      createdAt
      id
      owner
      statusChanged
      updatedAt
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    note
    offerDate
    payAmount
    shifts
    source
    specialty
    startDate
    startedStatus
    startedStatusName
    state
    status
    statusName
    statusUpdatedAt
    submittal {
      externalUpdatedAt
      id
      jobId
      status
      submittalDate
      workerId
    }
    timeOffEndDate
    timeOffStartDate
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerAssignments {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    zipcode
  }
}
    `;
export const useDirectOfferMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DirectOfferMutation, TError, Types.DirectOfferMutationVariables, TContext>) =>
    useMutation<Types.DirectOfferMutation, TError, Types.DirectOfferMutationVariables, TContext>(
      ['directOffer'],
      (variables?: Types.DirectOfferMutationVariables) => fetcher<Types.DirectOfferMutation, Types.DirectOfferMutationVariables>(DirectOfferDocument, variables)(),
      options
    );
useDirectOfferMutation.getKey = () => ['directOffer'];

useDirectOfferMutation.fetcher = (variables: Types.DirectOfferMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DirectOfferMutation, Types.DirectOfferMutationVariables>(DirectOfferDocument, variables, options);
export const DisconnectSocialAuthenticationDocument = `
    mutation disconnectSocialAuthentication($socialAuthenticationId: String!) {
  disconnectSocialAuthentication(socialAuthenticationId: $socialAuthenticationId) {
    success
  }
}
    `;
export const useDisconnectSocialAuthenticationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DisconnectSocialAuthenticationMutation, TError, Types.DisconnectSocialAuthenticationMutationVariables, TContext>) =>
    useMutation<Types.DisconnectSocialAuthenticationMutation, TError, Types.DisconnectSocialAuthenticationMutationVariables, TContext>(
      ['disconnectSocialAuthentication'],
      (variables?: Types.DisconnectSocialAuthenticationMutationVariables) => fetcher<Types.DisconnectSocialAuthenticationMutation, Types.DisconnectSocialAuthenticationMutationVariables>(DisconnectSocialAuthenticationDocument, variables)(),
      options
    );
useDisconnectSocialAuthenticationMutation.getKey = () => ['disconnectSocialAuthentication'];

useDisconnectSocialAuthenticationMutation.fetcher = (variables: Types.DisconnectSocialAuthenticationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DisconnectSocialAuthenticationMutation, Types.DisconnectSocialAuthenticationMutationVariables>(DisconnectSocialAuthenticationDocument, variables, options);
export const DismissBulletinDocument = `
    mutation dismissBulletin($bulletinId: String!) {
  dismissBulletin(bulletinId: $bulletinId) {
    bulletinId
    success
  }
}
    `;
export const useDismissBulletinMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.DismissBulletinMutation, TError, Types.DismissBulletinMutationVariables, TContext>) =>
    useMutation<Types.DismissBulletinMutation, TError, Types.DismissBulletinMutationVariables, TContext>(
      ['dismissBulletin'],
      (variables?: Types.DismissBulletinMutationVariables) => fetcher<Types.DismissBulletinMutation, Types.DismissBulletinMutationVariables>(DismissBulletinDocument, variables)(),
      options
    );
useDismissBulletinMutation.getKey = () => ['dismissBulletin'];

useDismissBulletinMutation.fetcher = (variables: Types.DismissBulletinMutationVariables, options?: RequestInit['headers']) => fetcher<Types.DismissBulletinMutation, Types.DismissBulletinMutationVariables>(DismissBulletinDocument, variables, options);
export const EmployerCancelInterviewDocument = `
    mutation employerCancelInterview($jobId: String!, $employerNote: String, $id: String!) {
  employerCancelInterview(employerNote: $employerNote, id: $id) {
    address1
    address2
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    createdAt
    description
    employerNote
    id
    interviewEndTime
    interviewLink
    interviewStartTime
    interviewType
    interviewers {
      createdAt
      id
      status
      updatedAt
    }
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    note
    state
    status
    statusName
    statusUpdatedAt
    timezone
    title
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    zipCode
  }
}
    `;
export const useEmployerCancelInterviewMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.EmployerCancelInterviewMutation, TError, Types.EmployerCancelInterviewMutationVariables, TContext>) =>
    useMutation<Types.EmployerCancelInterviewMutation, TError, Types.EmployerCancelInterviewMutationVariables, TContext>(
      ['employerCancelInterview'],
      (variables?: Types.EmployerCancelInterviewMutationVariables) => fetcher<Types.EmployerCancelInterviewMutation, Types.EmployerCancelInterviewMutationVariables>(EmployerCancelInterviewDocument, variables)(),
      options
    );
useEmployerCancelInterviewMutation.getKey = () => ['employerCancelInterview'];

useEmployerCancelInterviewMutation.fetcher = (variables: Types.EmployerCancelInterviewMutationVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerCancelInterviewMutation, Types.EmployerCancelInterviewMutationVariables>(EmployerCancelInterviewDocument, variables, options);
export const EmployerFavoriteWorkerDocument = `
    mutation employerFavoriteWorker($size: [String!]!, $jobId: String!, $size1: [String!]!, $action: FavoriteActionEnum!, $workerId: String!) {
  employerFavoriteWorker(action: $action, workerId: $workerId) {
    agreedToTerms
    availableStartDate
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    avatarUrl
    blocked
    blockedClient {
      note
    }
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
    dateOfBirth
    email
    emergencyContact {
      contactName
      contactPhone
      contactRelationship
      id
      workerId
    }
    employmentType
    facilityTypes
    firstName
    hasActiveAssignment
    id
    isFavorited
    jobCategoriesWorkedNumber
    jobMatchingScore(jobId: $jobId)
    lastName
    lastOtpExpiredAt
    lastSignInAt
    locationsWorkedNumber
    maidenName
    noCall
    noEmail
    noNotification
    noSms
    noTalentMatches
    notificationSetting {
      assignmentEndingReminder
      completeOnboarding
      documentExpired
      id
      interviewInvitationExpired
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
    profilePercentageCompleted
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
    remainingExpirationTime
    resumes {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size1)
      thumbnails
    }
    shiftRequested
    socialSecurityNumber
    supportDocuments {
      documentType
      id
    }
    timeOffRequested
    totalUnreadMessage
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
    workerCertifications {
      certificationType
      compactLicense
      createdAt
      expirationDate
      id
      licenseDiscipline
      licenseNumber
      licenseState
      title
    }
    workerEducations {
      city
      country
      createdAt
      degreeDate
      degreeName
      id
      major
      schoolName
      state
    }
    workerNotes {
      id
      note
      noteType
    }
    workerOnboardings {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
    workerReferences {
      city
      contactEmail
      contactFirstName
      contactFullName
      contactLastName
      contactPhone
      createdAt
      facilityName
      id
      jobTitle
      refType
      relationship
      salutation
      state
      workedFrom
      workedTo
    }
    workerSpecialties {
      category
      completedChecklist
      id
      isExpired
      isPrimary
      specialty
      specialtyId
      specialtyLongName
      status
    }
    workingAuthorization {
      dateOfBirth
      id
      idPhotoUrl
      legalRightToWork
      socialSecurityNumber
      workerId
    }
    workingPreferredLocations {
      id
      preferredWorkingCity
      preferredWorkingState
    }
  }
}
    `;
export const useEmployerFavoriteWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.EmployerFavoriteWorkerMutation, TError, Types.EmployerFavoriteWorkerMutationVariables, TContext>) =>
    useMutation<Types.EmployerFavoriteWorkerMutation, TError, Types.EmployerFavoriteWorkerMutationVariables, TContext>(
      ['employerFavoriteWorker'],
      (variables?: Types.EmployerFavoriteWorkerMutationVariables) => fetcher<Types.EmployerFavoriteWorkerMutation, Types.EmployerFavoriteWorkerMutationVariables>(EmployerFavoriteWorkerDocument, variables)(),
      options
    );
useEmployerFavoriteWorkerMutation.getKey = () => ['employerFavoriteWorker'];

useEmployerFavoriteWorkerMutation.fetcher = (variables: Types.EmployerFavoriteWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerFavoriteWorkerMutation, Types.EmployerFavoriteWorkerMutationVariables>(EmployerFavoriteWorkerDocument, variables, options);
export const EmployerRescheduleInterviewDocument = `
    mutation employerRescheduleInterview($jobId: String!, $employerNote: String, $id: String!, $interviewEndTime: ISO8601DateTime!, $interviewStartTime: ISO8601DateTime!, $timezone: String!, $title: String) {
  employerRescheduleInterview(
    employerNote: $employerNote
    id: $id
    interviewEndTime: $interviewEndTime
    interviewStartTime: $interviewStartTime
    timezone: $timezone
    title: $title
  ) {
    address1
    address2
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    createdAt
    description
    employerNote
    id
    interviewEndTime
    interviewLink
    interviewStartTime
    interviewType
    interviewers {
      createdAt
      id
      status
      updatedAt
    }
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    note
    state
    status
    statusName
    statusUpdatedAt
    timezone
    title
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    zipCode
  }
}
    `;
export const useEmployerRescheduleInterviewMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.EmployerRescheduleInterviewMutation, TError, Types.EmployerRescheduleInterviewMutationVariables, TContext>) =>
    useMutation<Types.EmployerRescheduleInterviewMutation, TError, Types.EmployerRescheduleInterviewMutationVariables, TContext>(
      ['employerRescheduleInterview'],
      (variables?: Types.EmployerRescheduleInterviewMutationVariables) => fetcher<Types.EmployerRescheduleInterviewMutation, Types.EmployerRescheduleInterviewMutationVariables>(EmployerRescheduleInterviewDocument, variables)(),
      options
    );
useEmployerRescheduleInterviewMutation.getKey = () => ['employerRescheduleInterview'];

useEmployerRescheduleInterviewMutation.fetcher = (variables: Types.EmployerRescheduleInterviewMutationVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerRescheduleInterviewMutation, Types.EmployerRescheduleInterviewMutationVariables>(EmployerRescheduleInterviewDocument, variables, options);
export const EmployerUpdateInterviewDocument = `
    mutation employerUpdateInterview($jobId: String!, $employerNote: String, $event: String!, $id: String!) {
  employerUpdateInterview(employerNote: $employerNote, event: $event, id: $id) {
    address1
    address2
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    createdAt
    description
    employerNote
    id
    interviewEndTime
    interviewLink
    interviewStartTime
    interviewType
    interviewers {
      createdAt
      id
      status
      updatedAt
    }
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    note
    state
    status
    statusName
    statusUpdatedAt
    timezone
    title
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    zipCode
  }
}
    `;
export const useEmployerUpdateInterviewMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.EmployerUpdateInterviewMutation, TError, Types.EmployerUpdateInterviewMutationVariables, TContext>) =>
    useMutation<Types.EmployerUpdateInterviewMutation, TError, Types.EmployerUpdateInterviewMutationVariables, TContext>(
      ['employerUpdateInterview'],
      (variables?: Types.EmployerUpdateInterviewMutationVariables) => fetcher<Types.EmployerUpdateInterviewMutation, Types.EmployerUpdateInterviewMutationVariables>(EmployerUpdateInterviewDocument, variables)(),
      options
    );
useEmployerUpdateInterviewMutation.getKey = () => ['employerUpdateInterview'];

useEmployerUpdateInterviewMutation.fetcher = (variables: Types.EmployerUpdateInterviewMutationVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerUpdateInterviewMutation, Types.EmployerUpdateInterviewMutationVariables>(EmployerUpdateInterviewDocument, variables, options);
export const EmployerUpdateJobApplicantDocument = `
    mutation employerUpdateJobApplicant($jobId: String!, $employerNote: String, $event: String!, $id: String!) {
  employerUpdateJobApplicant(employerNote: $employerNote, event: $event, id: $id) {
    address
    address2
    applicantTimeOffs {
      endDate
      id
      startDate
    }
    applicationProcess
    applyDate
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkerAssignment {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    discipline
    duration
    durationType
    employerNote
    frequency
    id
    interview {
      address1
      address2
      city
      createdAt
      description
      employerNote
      id
      interviewEndTime
      interviewLink
      interviewStartTime
      interviewType
      note
      state
      status
      statusName
      statusUpdatedAt
      timezone
      title
      updateEvents
      updatedAt
      zipCode
    }
    isDirectOffer
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicantActivities {
      createdAt
      id
      owner
      statusChanged
      updatedAt
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    note
    offerDate
    payAmount
    shifts
    source
    specialty
    startDate
    startedStatus
    startedStatusName
    state
    status
    statusName
    statusUpdatedAt
    submittal {
      externalUpdatedAt
      id
      jobId
      status
      submittalDate
      workerId
    }
    timeOffEndDate
    timeOffStartDate
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerAssignments {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    zipcode
  }
}
    `;
export const useEmployerUpdateJobApplicantMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.EmployerUpdateJobApplicantMutation, TError, Types.EmployerUpdateJobApplicantMutationVariables, TContext>) =>
    useMutation<Types.EmployerUpdateJobApplicantMutation, TError, Types.EmployerUpdateJobApplicantMutationVariables, TContext>(
      ['employerUpdateJobApplicant'],
      (variables?: Types.EmployerUpdateJobApplicantMutationVariables) => fetcher<Types.EmployerUpdateJobApplicantMutation, Types.EmployerUpdateJobApplicantMutationVariables>(EmployerUpdateJobApplicantDocument, variables)(),
      options
    );
useEmployerUpdateJobApplicantMutation.getKey = () => ['employerUpdateJobApplicant'];

useEmployerUpdateJobApplicantMutation.fetcher = (variables: Types.EmployerUpdateJobApplicantMutationVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerUpdateJobApplicantMutation, Types.EmployerUpdateJobApplicantMutationVariables>(EmployerUpdateJobApplicantDocument, variables, options);
export const ExportBillingSubscriptionDocument = `
    mutation exportBillingSubscription($clientName: String, $description: String, $exportAll: Boolean, $fileType: String!, $ids: [String!]!, $latestPaymentStatus: String, $nextPaymentAt: String, $paymentMethodType: String, $status: String) {
  exportBillingSubscription(
    clientName: $clientName
    description: $description
    exportAll: $exportAll
    fileType: $fileType
    ids: $ids
    latestPaymentStatus: $latestPaymentStatus
    nextPaymentAt: $nextPaymentAt
    paymentMethodType: $paymentMethodType
    status: $status
  ) {
    companyId
    fileType
    fileUrl
    id
    status
  }
}
    `;
export const useExportBillingSubscriptionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ExportBillingSubscriptionMutation, TError, Types.ExportBillingSubscriptionMutationVariables, TContext>) =>
    useMutation<Types.ExportBillingSubscriptionMutation, TError, Types.ExportBillingSubscriptionMutationVariables, TContext>(
      ['exportBillingSubscription'],
      (variables?: Types.ExportBillingSubscriptionMutationVariables) => fetcher<Types.ExportBillingSubscriptionMutation, Types.ExportBillingSubscriptionMutationVariables>(ExportBillingSubscriptionDocument, variables)(),
      options
    );
useExportBillingSubscriptionMutation.getKey = () => ['exportBillingSubscription'];

useExportBillingSubscriptionMutation.fetcher = (variables: Types.ExportBillingSubscriptionMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ExportBillingSubscriptionMutation, Types.ExportBillingSubscriptionMutationVariables>(ExportBillingSubscriptionDocument, variables, options);
export const ExportClientDocument = `
    mutation exportClient($description: String, $exportAll: Boolean, $fileType: String!, $ids: [String!]!, $name: String, $verifyStatus: String) {
  exportClient(
    description: $description
    exportAll: $exportAll
    fileType: $fileType
    ids: $ids
    name: $name
    verifyStatus: $verifyStatus
  ) {
    companyId
    fileType
    fileUrl
    id
    status
  }
}
    `;
export const useExportClientMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ExportClientMutation, TError, Types.ExportClientMutationVariables, TContext>) =>
    useMutation<Types.ExportClientMutation, TError, Types.ExportClientMutationVariables, TContext>(
      ['exportClient'],
      (variables?: Types.ExportClientMutationVariables) => fetcher<Types.ExportClientMutation, Types.ExportClientMutationVariables>(ExportClientDocument, variables)(),
      options
    );
useExportClientMutation.getKey = () => ['exportClient'];

useExportClientMutation.fetcher = (variables: Types.ExportClientMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ExportClientMutation, Types.ExportClientMutationVariables>(ExportClientDocument, variables, options);
export const ExportEmployerDocument = `
    mutation exportEmployer($clientName: String, $email: String, $exportAll: Boolean, $fileType: String!, $fullName: String, $ids: [String!]!, $lastSignInAt: String, $phone: String, $title: String) {
  exportEmployer(
    clientName: $clientName
    email: $email
    exportAll: $exportAll
    fileType: $fileType
    fullName: $fullName
    ids: $ids
    lastSignInAt: $lastSignInAt
    phone: $phone
    title: $title
  ) {
    companyId
    fileType
    fileUrl
    id
    status
  }
}
    `;
export const useExportEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ExportEmployerMutation, TError, Types.ExportEmployerMutationVariables, TContext>) =>
    useMutation<Types.ExportEmployerMutation, TError, Types.ExportEmployerMutationVariables, TContext>(
      ['exportEmployer'],
      (variables?: Types.ExportEmployerMutationVariables) => fetcher<Types.ExportEmployerMutation, Types.ExportEmployerMutationVariables>(ExportEmployerDocument, variables)(),
      options
    );
useExportEmployerMutation.getKey = () => ['exportEmployer'];

useExportEmployerMutation.fetcher = (variables: Types.ExportEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ExportEmployerMutation, Types.ExportEmployerMutationVariables>(ExportEmployerDocument, variables, options);
export const ExportLocationDocument = `
    mutation exportLocation($address: String, $addressState: String, $city: String, $clientName: String, $exportAll: Boolean, $fileType: String!, $ids: [String!]!, $name: String, $phone: String, $status: String, $zipcode: String) {
  exportLocation(
    address: $address
    addressState: $addressState
    city: $city
    clientName: $clientName
    exportAll: $exportAll
    fileType: $fileType
    ids: $ids
    name: $name
    phone: $phone
    status: $status
    zipcode: $zipcode
  ) {
    companyId
    fileType
    fileUrl
    id
    status
  }
}
    `;
export const useExportLocationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ExportLocationMutation, TError, Types.ExportLocationMutationVariables, TContext>) =>
    useMutation<Types.ExportLocationMutation, TError, Types.ExportLocationMutationVariables, TContext>(
      ['exportLocation'],
      (variables?: Types.ExportLocationMutationVariables) => fetcher<Types.ExportLocationMutation, Types.ExportLocationMutationVariables>(ExportLocationDocument, variables)(),
      options
    );
useExportLocationMutation.getKey = () => ['exportLocation'];

useExportLocationMutation.fetcher = (variables: Types.ExportLocationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ExportLocationMutation, Types.ExportLocationMutationVariables>(ExportLocationDocument, variables, options);
export const ExportWorkerDocument = `
    mutation exportWorker($clientName: String, $email: String, $exportAll: Boolean, $fileType: String!, $firstName: String, $fullName: String, $ids: [String!]!, $lastName: String, $lastSignInAt: String, $phone: String, $profileCompletion: String, $specialty: String, $workerAddressZipcode: String) {
  exportWorker(
    clientName: $clientName
    email: $email
    exportAll: $exportAll
    fileType: $fileType
    firstName: $firstName
    fullName: $fullName
    ids: $ids
    lastName: $lastName
    lastSignInAt: $lastSignInAt
    phone: $phone
    profileCompletion: $profileCompletion
    specialty: $specialty
    workerAddressZipcode: $workerAddressZipcode
  ) {
    companyId
    fileType
    fileUrl
    id
    status
  }
}
    `;
export const useExportWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ExportWorkerMutation, TError, Types.ExportWorkerMutationVariables, TContext>) =>
    useMutation<Types.ExportWorkerMutation, TError, Types.ExportWorkerMutationVariables, TContext>(
      ['exportWorker'],
      (variables?: Types.ExportWorkerMutationVariables) => fetcher<Types.ExportWorkerMutation, Types.ExportWorkerMutationVariables>(ExportWorkerDocument, variables)(),
      options
    );
useExportWorkerMutation.getKey = () => ['exportWorker'];

useExportWorkerMutation.fetcher = (variables: Types.ExportWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ExportWorkerMutation, Types.ExportWorkerMutationVariables>(ExportWorkerDocument, variables, options);
export const FavoriteOrUnfavoriteAJobDocument = `
    mutation favoriteOrUnfavoriteAJob($action: FavoriteActionEnum!, $jobId: String!) {
  favoriteOrUnfavoriteAJob(action: $action, jobId: $jobId) {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    distance
    distanceToCurrentUserSearchLocation
    draftId
    duration
    durationType
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hospital
    hoursPerWeek
    id
    images
    isAsap
    isBookmarked
    isDisliked
    isFavorited
    isLiked
    isSkillChecklist
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    latitude
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    locationImage {
      city
      id
      state
    }
    longitude
    matchingPercentage
    minExpYear
    minWeeklyPayAmount
    noTalentMatches
    profileRequirements
    publishedAt
    requirementNotes
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const useFavoriteOrUnfavoriteAJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.FavoriteOrUnfavoriteAJobMutation, TError, Types.FavoriteOrUnfavoriteAJobMutationVariables, TContext>) =>
    useMutation<Types.FavoriteOrUnfavoriteAJobMutation, TError, Types.FavoriteOrUnfavoriteAJobMutationVariables, TContext>(
      ['favoriteOrUnfavoriteAJob'],
      (variables?: Types.FavoriteOrUnfavoriteAJobMutationVariables) => fetcher<Types.FavoriteOrUnfavoriteAJobMutation, Types.FavoriteOrUnfavoriteAJobMutationVariables>(FavoriteOrUnfavoriteAJobDocument, variables)(),
      options
    );
useFavoriteOrUnfavoriteAJobMutation.getKey = () => ['favoriteOrUnfavoriteAJob'];

useFavoriteOrUnfavoriteAJobMutation.fetcher = (variables: Types.FavoriteOrUnfavoriteAJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.FavoriteOrUnfavoriteAJobMutation, Types.FavoriteOrUnfavoriteAJobMutationVariables>(FavoriteOrUnfavoriteAJobDocument, variables, options);
export const LikeOrDislikeAJobDocument = `
    mutation likeOrDislikeAJob($action: LikeActionEnum!, $jobId: String!) {
  likeOrDislikeAJob(action: $action, jobId: $jobId) {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    distance
    distanceToCurrentUserSearchLocation
    draftId
    duration
    durationType
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hospital
    hoursPerWeek
    id
    images
    isAsap
    isBookmarked
    isDisliked
    isFavorited
    isLiked
    isSkillChecklist
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    latitude
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    locationImage {
      city
      id
      state
    }
    longitude
    matchingPercentage
    minExpYear
    minWeeklyPayAmount
    noTalentMatches
    profileRequirements
    publishedAt
    requirementNotes
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const useLikeOrDislikeAJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.LikeOrDislikeAJobMutation, TError, Types.LikeOrDislikeAJobMutationVariables, TContext>) =>
    useMutation<Types.LikeOrDislikeAJobMutation, TError, Types.LikeOrDislikeAJobMutationVariables, TContext>(
      ['likeOrDislikeAJob'],
      (variables?: Types.LikeOrDislikeAJobMutationVariables) => fetcher<Types.LikeOrDislikeAJobMutation, Types.LikeOrDislikeAJobMutationVariables>(LikeOrDislikeAJobDocument, variables)(),
      options
    );
useLikeOrDislikeAJobMutation.getKey = () => ['likeOrDislikeAJob'];

useLikeOrDislikeAJobMutation.fetcher = (variables: Types.LikeOrDislikeAJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.LikeOrDislikeAJobMutation, Types.LikeOrDislikeAJobMutationVariables>(LikeOrDislikeAJobDocument, variables, options);
export const MarkAllMessagesAsReadDocument = `
    mutation markAllMessagesAsRead($ids: [String!]!) {
  markAllMessagesAsRead(ids: $ids) {
    success
  }
}
    `;
export const useMarkAllMessagesAsReadMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.MarkAllMessagesAsReadMutation, TError, Types.MarkAllMessagesAsReadMutationVariables, TContext>) =>
    useMutation<Types.MarkAllMessagesAsReadMutation, TError, Types.MarkAllMessagesAsReadMutationVariables, TContext>(
      ['markAllMessagesAsRead'],
      (variables?: Types.MarkAllMessagesAsReadMutationVariables) => fetcher<Types.MarkAllMessagesAsReadMutation, Types.MarkAllMessagesAsReadMutationVariables>(MarkAllMessagesAsReadDocument, variables)(),
      options
    );
useMarkAllMessagesAsReadMutation.getKey = () => ['markAllMessagesAsRead'];

useMarkAllMessagesAsReadMutation.fetcher = (variables: Types.MarkAllMessagesAsReadMutationVariables, options?: RequestInit['headers']) => fetcher<Types.MarkAllMessagesAsReadMutation, Types.MarkAllMessagesAsReadMutationVariables>(MarkAllMessagesAsReadDocument, variables, options);
export const MarkAllNotificationsStatusDocument = `
    mutation markAllNotificationsStatus($events: [String!], $exceptEvents: [String!], $status: NotificationStatusEnum) {
  markAllNotificationsStatus(
    events: $events
    exceptEvents: $exceptEvents
    status: $status
  ) {
    success
  }
}
    `;
export const useMarkAllNotificationsStatusMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.MarkAllNotificationsStatusMutation, TError, Types.MarkAllNotificationsStatusMutationVariables, TContext>) =>
    useMutation<Types.MarkAllNotificationsStatusMutation, TError, Types.MarkAllNotificationsStatusMutationVariables, TContext>(
      ['markAllNotificationsStatus'],
      (variables?: Types.MarkAllNotificationsStatusMutationVariables) => fetcher<Types.MarkAllNotificationsStatusMutation, Types.MarkAllNotificationsStatusMutationVariables>(MarkAllNotificationsStatusDocument, variables)(),
      options
    );
useMarkAllNotificationsStatusMutation.getKey = () => ['markAllNotificationsStatus'];

useMarkAllNotificationsStatusMutation.fetcher = (variables?: Types.MarkAllNotificationsStatusMutationVariables, options?: RequestInit['headers']) => fetcher<Types.MarkAllNotificationsStatusMutation, Types.MarkAllNotificationsStatusMutationVariables>(MarkAllNotificationsStatusDocument, variables, options);
export const MarkCompleteComponentDocument = `
    mutation markCompleteComponent($id: String!) {
  markCompleteComponent(id: $id) {
    completed
    description
    id
    target
    title
  }
}
    `;
export const useMarkCompleteComponentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.MarkCompleteComponentMutation, TError, Types.MarkCompleteComponentMutationVariables, TContext>) =>
    useMutation<Types.MarkCompleteComponentMutation, TError, Types.MarkCompleteComponentMutationVariables, TContext>(
      ['markCompleteComponent'],
      (variables?: Types.MarkCompleteComponentMutationVariables) => fetcher<Types.MarkCompleteComponentMutation, Types.MarkCompleteComponentMutationVariables>(MarkCompleteComponentDocument, variables)(),
      options
    );
useMarkCompleteComponentMutation.getKey = () => ['markCompleteComponent'];

useMarkCompleteComponentMutation.fetcher = (variables: Types.MarkCompleteComponentMutationVariables, options?: RequestInit['headers']) => fetcher<Types.MarkCompleteComponentMutation, Types.MarkCompleteComponentMutationVariables>(MarkCompleteComponentDocument, variables, options);
export const MarkMessageAsReadDocument = `
    mutation markMessageAsRead($size: [String!]!, $messageId: String!) {
  markMessageAsRead(messageId: $messageId) {
    attachment {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    createdAt
    id
    message
    messageThread {
      clientId
      companyId
      id
      lastMessage
      lastTimestamp
      objectId
      objectType
      threadIconUrl
      unreadMessageCounter
    }
    objectId
    objectType
    receiver {
      email
      firstName
      id
      lastName
      phone
    }
    sender {
      email
      firstName
      id
      lastName
      phone
    }
    status
  }
}
    `;
export const useMarkMessageAsReadMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.MarkMessageAsReadMutation, TError, Types.MarkMessageAsReadMutationVariables, TContext>) =>
    useMutation<Types.MarkMessageAsReadMutation, TError, Types.MarkMessageAsReadMutationVariables, TContext>(
      ['markMessageAsRead'],
      (variables?: Types.MarkMessageAsReadMutationVariables) => fetcher<Types.MarkMessageAsReadMutation, Types.MarkMessageAsReadMutationVariables>(MarkMessageAsReadDocument, variables)(),
      options
    );
useMarkMessageAsReadMutation.getKey = () => ['markMessageAsRead'];

useMarkMessageAsReadMutation.fetcher = (variables: Types.MarkMessageAsReadMutationVariables, options?: RequestInit['headers']) => fetcher<Types.MarkMessageAsReadMutation, Types.MarkMessageAsReadMutationVariables>(MarkMessageAsReadDocument, variables, options);
export const MarkNotificationsStatusDocument = `
    mutation markNotificationsStatus($notificationIds: [String!]!, $status: NotificationStatusEnum) {
  markNotificationsStatus(notificationIds: $notificationIds, status: $status) {
    success
  }
}
    `;
export const useMarkNotificationsStatusMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.MarkNotificationsStatusMutation, TError, Types.MarkNotificationsStatusMutationVariables, TContext>) =>
    useMutation<Types.MarkNotificationsStatusMutation, TError, Types.MarkNotificationsStatusMutationVariables, TContext>(
      ['markNotificationsStatus'],
      (variables?: Types.MarkNotificationsStatusMutationVariables) => fetcher<Types.MarkNotificationsStatusMutation, Types.MarkNotificationsStatusMutationVariables>(MarkNotificationsStatusDocument, variables)(),
      options
    );
useMarkNotificationsStatusMutation.getKey = () => ['markNotificationsStatus'];

useMarkNotificationsStatusMutation.fetcher = (variables: Types.MarkNotificationsStatusMutationVariables, options?: RequestInit['headers']) => fetcher<Types.MarkNotificationsStatusMutation, Types.MarkNotificationsStatusMutationVariables>(MarkNotificationsStatusDocument, variables, options);
export const PublicCreateContactFormDocument = `
    mutation publicCreateContactForm($description: String, $email: String, $fullName: String, $phone: String, $recaptchaToken: String, $subject: String) {
  publicCreateContactForm(
    description: $description
    email: $email
    fullName: $fullName
    phone: $phone
    recaptchaToken: $recaptchaToken
    subject: $subject
  ) {
    success
  }
}
    `;
export const usePublicCreateContactFormMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.PublicCreateContactFormMutation, TError, Types.PublicCreateContactFormMutationVariables, TContext>) =>
    useMutation<Types.PublicCreateContactFormMutation, TError, Types.PublicCreateContactFormMutationVariables, TContext>(
      ['publicCreateContactForm'],
      (variables?: Types.PublicCreateContactFormMutationVariables) => fetcher<Types.PublicCreateContactFormMutation, Types.PublicCreateContactFormMutationVariables>(PublicCreateContactFormDocument, variables)(),
      options
    );
usePublicCreateContactFormMutation.getKey = () => ['publicCreateContactForm'];

usePublicCreateContactFormMutation.fetcher = (variables?: Types.PublicCreateContactFormMutationVariables, options?: RequestInit['headers']) => fetcher<Types.PublicCreateContactFormMutation, Types.PublicCreateContactFormMutationVariables>(PublicCreateContactFormDocument, variables, options);
export const PublicCreateEmployerDocument = `
    mutation publicCreateEmployer($agreedToTerms: Boolean, $avatarSignedBlobId: String, $clientAttributes: ClientArgument!, $email: String, $firstName: String, $lastName: String, $password: String, $passwordConfirmation: String, $paymentMethod: String, $phone: String, $recaptchaToken: String, $scope: EmployerScopeEnum, $source: SignupSourceEnum, $title: String) {
  publicCreateEmployer(
    agreedToTerms: $agreedToTerms
    avatarSignedBlobId: $avatarSignedBlobId
    clientAttributes: $clientAttributes
    email: $email
    firstName: $firstName
    lastName: $lastName
    password: $password
    passwordConfirmation: $passwordConfirmation
    paymentMethod: $paymentMethod
    phone: $phone
    recaptchaToken: $recaptchaToken
    scope: $scope
    source: $source
    title: $title
  ) {
    success
  }
}
    `;
export const usePublicCreateEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.PublicCreateEmployerMutation, TError, Types.PublicCreateEmployerMutationVariables, TContext>) =>
    useMutation<Types.PublicCreateEmployerMutation, TError, Types.PublicCreateEmployerMutationVariables, TContext>(
      ['publicCreateEmployer'],
      (variables?: Types.PublicCreateEmployerMutationVariables) => fetcher<Types.PublicCreateEmployerMutation, Types.PublicCreateEmployerMutationVariables>(PublicCreateEmployerDocument, variables)(),
      options
    );
usePublicCreateEmployerMutation.getKey = () => ['publicCreateEmployer'];

usePublicCreateEmployerMutation.fetcher = (variables: Types.PublicCreateEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.PublicCreateEmployerMutation, Types.PublicCreateEmployerMutationVariables>(PublicCreateEmployerDocument, variables, options);
export const PublicCreateWorkerDocument = `
    mutation publicCreateWorker($email: String!, $employmentType: String, $facilityTypes: String, $firstName: String!, $jobId: String, $lastName: String!, $password: String, $passwordConfirmation: String, $phone: String!, $recaptchaToken: String, $referrerCode: String, $socialAuthenticationId: String, $source: SignupSourceEnum, $workerSpecialtiesAttributes: [WorkerSpecialtyArgument!], $workingPreferredLocationsAttributes: [WorkingPreferredLocationArgument!]) {
  publicCreateWorker(
    email: $email
    employmentType: $employmentType
    facilityTypes: $facilityTypes
    firstName: $firstName
    jobId: $jobId
    lastName: $lastName
    password: $password
    passwordConfirmation: $passwordConfirmation
    phone: $phone
    recaptchaToken: $recaptchaToken
    referrerCode: $referrerCode
    socialAuthenticationId: $socialAuthenticationId
    source: $source
    workerSpecialtiesAttributes: $workerSpecialtiesAttributes
    workingPreferredLocationsAttributes: $workingPreferredLocationsAttributes
  ) {
    success
  }
}
    `;
export const usePublicCreateWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.PublicCreateWorkerMutation, TError, Types.PublicCreateWorkerMutationVariables, TContext>) =>
    useMutation<Types.PublicCreateWorkerMutation, TError, Types.PublicCreateWorkerMutationVariables, TContext>(
      ['publicCreateWorker'],
      (variables?: Types.PublicCreateWorkerMutationVariables) => fetcher<Types.PublicCreateWorkerMutation, Types.PublicCreateWorkerMutationVariables>(PublicCreateWorkerDocument, variables)(),
      options
    );
usePublicCreateWorkerMutation.getKey = () => ['publicCreateWorker'];

usePublicCreateWorkerMutation.fetcher = (variables: Types.PublicCreateWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.PublicCreateWorkerMutation, Types.PublicCreateWorkerMutationVariables>(PublicCreateWorkerDocument, variables, options);
export const PublishDraftJobDocument = `
    mutation publishDraftJob($accountId: String, $address: String, $address2: String, $benefitContent: String, $certificationsRequired: String, $city: String, $clientId: String, $complianceRequirements: [String!], $country: String, $customStartDate: String, $deletedBy: String, $description: String, $discipline: String, $duration: Int, $durationType: String, $employerOfRecord: JobEmployerOfRecordEnum, $exclusiveJob: String, $facilityType: String, $frequency: String, $hospital: String, $hoursPerWeek: Int, $id: String!, $isAsap: Boolean, $isSkillChecklist: Boolean, $jobInvitationsAttributes: [JobInvitationArgument!], $jobType: String, $latitude: BigDecimal, $licenseStateCompact: Boolean, $licenseStateRequired: [String!], $licensesRequired: [String!], $locationId: String, $longitude: BigDecimal, $minExpYear: Int, $minWeeklyPayAmount: Float, $profileRequirements: [String!], $recommendType: JobRecommendTypeEnum, $requirementNotes: String, $scope: String, $shifts: [String!], $skillId: Int, $skillLongName: String, $skillName: String, $slotsNumber: Int, $slug: String, $source: String, $specialty: [String!], $startDate: ISO8601DateTime, $state: String, $title: String, $weeklyPayAmount: Float, $zipcode: String) {
  publishDraftJob(
    accountId: $accountId
    address: $address
    address2: $address2
    benefitContent: $benefitContent
    certificationsRequired: $certificationsRequired
    city: $city
    clientId: $clientId
    complianceRequirements: $complianceRequirements
    country: $country
    customStartDate: $customStartDate
    deletedBy: $deletedBy
    description: $description
    discipline: $discipline
    duration: $duration
    durationType: $durationType
    employerOfRecord: $employerOfRecord
    exclusiveJob: $exclusiveJob
    facilityType: $facilityType
    frequency: $frequency
    hospital: $hospital
    hoursPerWeek: $hoursPerWeek
    id: $id
    isAsap: $isAsap
    isSkillChecklist: $isSkillChecklist
    jobInvitationsAttributes: $jobInvitationsAttributes
    jobType: $jobType
    latitude: $latitude
    licenseStateCompact: $licenseStateCompact
    licenseStateRequired: $licenseStateRequired
    licensesRequired: $licensesRequired
    locationId: $locationId
    longitude: $longitude
    minExpYear: $minExpYear
    minWeeklyPayAmount: $minWeeklyPayAmount
    profileRequirements: $profileRequirements
    recommendType: $recommendType
    requirementNotes: $requirementNotes
    scope: $scope
    shifts: $shifts
    skillId: $skillId
    skillLongName: $skillLongName
    skillName: $skillName
    slotsNumber: $slotsNumber
    slug: $slug
    source: $source
    specialty: $specialty
    startDate: $startDate
    state: $state
    title: $title
    weeklyPayAmount: $weeklyPayAmount
    zipcode: $zipcode
  ) {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    distance
    distanceToCurrentUserSearchLocation
    draftId
    duration
    durationType
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hospital
    hoursPerWeek
    id
    images
    isAsap
    isBookmarked
    isDisliked
    isFavorited
    isLiked
    isSkillChecklist
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    latitude
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    locationImage {
      city
      id
      state
    }
    longitude
    matchingPercentage
    minExpYear
    minWeeklyPayAmount
    noTalentMatches
    profileRequirements
    publishedAt
    requirementNotes
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const usePublishDraftJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.PublishDraftJobMutation, TError, Types.PublishDraftJobMutationVariables, TContext>) =>
    useMutation<Types.PublishDraftJobMutation, TError, Types.PublishDraftJobMutationVariables, TContext>(
      ['publishDraftJob'],
      (variables?: Types.PublishDraftJobMutationVariables) => fetcher<Types.PublishDraftJobMutation, Types.PublishDraftJobMutationVariables>(PublishDraftJobDocument, variables)(),
      options
    );
usePublishDraftJobMutation.getKey = () => ['publishDraftJob'];

usePublishDraftJobMutation.fetcher = (variables: Types.PublishDraftJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.PublishDraftJobMutation, Types.PublishDraftJobMutationVariables>(PublishDraftJobDocument, variables, options);
export const QuickApplyJobDocument = `
    mutation quickApplyJob($email: String!, $employmentType: String, $facilityTypes: String, $firstName: String!, $jobId: String!, $lastName: String!, $password: String, $passwordConfirmation: String, $phone: String!, $recaptchaToken: String, $referrerCode: String, $source: SignupSourceEnum, $workerSpecialtiesAttributes: [WorkerSpecialtyArgument!], $workingPreferredLocationsAttributes: [WorkingPreferredLocationArgument!]) {
  quickApplyJob(
    email: $email
    employmentType: $employmentType
    facilityTypes: $facilityTypes
    firstName: $firstName
    jobId: $jobId
    lastName: $lastName
    password: $password
    passwordConfirmation: $passwordConfirmation
    phone: $phone
    recaptchaToken: $recaptchaToken
    referrerCode: $referrerCode
    source: $source
    workerSpecialtiesAttributes: $workerSpecialtiesAttributes
    workingPreferredLocationsAttributes: $workingPreferredLocationsAttributes
  ) {
    success
  }
}
    `;
export const useQuickApplyJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.QuickApplyJobMutation, TError, Types.QuickApplyJobMutationVariables, TContext>) =>
    useMutation<Types.QuickApplyJobMutation, TError, Types.QuickApplyJobMutationVariables, TContext>(
      ['quickApplyJob'],
      (variables?: Types.QuickApplyJobMutationVariables) => fetcher<Types.QuickApplyJobMutation, Types.QuickApplyJobMutationVariables>(QuickApplyJobDocument, variables)(),
      options
    );
useQuickApplyJobMutation.getKey = () => ['quickApplyJob'];

useQuickApplyJobMutation.fetcher = (variables: Types.QuickApplyJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.QuickApplyJobMutation, Types.QuickApplyJobMutationVariables>(QuickApplyJobDocument, variables, options);
export const RejectClientDocument = `
    mutation rejectClient($id: String!, $rejectedReason: String!) {
  rejectClient(id: $id, rejectedReason: $rejectedReason) {
    success
  }
}
    `;
export const useRejectClientMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.RejectClientMutation, TError, Types.RejectClientMutationVariables, TContext>) =>
    useMutation<Types.RejectClientMutation, TError, Types.RejectClientMutationVariables, TContext>(
      ['rejectClient'],
      (variables?: Types.RejectClientMutationVariables) => fetcher<Types.RejectClientMutation, Types.RejectClientMutationVariables>(RejectClientDocument, variables)(),
      options
    );
useRejectClientMutation.getKey = () => ['rejectClient'];

useRejectClientMutation.fetcher = (variables: Types.RejectClientMutationVariables, options?: RequestInit['headers']) => fetcher<Types.RejectClientMutation, Types.RejectClientMutationVariables>(RejectClientDocument, variables, options);
export const RemoveBillingSubscriptionDocument = `
    mutation removeBillingSubscription($clientId: String) {
  removeBillingSubscription(clientId: $clientId) {
    success
  }
}
    `;
export const useRemoveBillingSubscriptionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.RemoveBillingSubscriptionMutation, TError, Types.RemoveBillingSubscriptionMutationVariables, TContext>) =>
    useMutation<Types.RemoveBillingSubscriptionMutation, TError, Types.RemoveBillingSubscriptionMutationVariables, TContext>(
      ['removeBillingSubscription'],
      (variables?: Types.RemoveBillingSubscriptionMutationVariables) => fetcher<Types.RemoveBillingSubscriptionMutation, Types.RemoveBillingSubscriptionMutationVariables>(RemoveBillingSubscriptionDocument, variables)(),
      options
    );
useRemoveBillingSubscriptionMutation.getKey = () => ['removeBillingSubscription'];

useRemoveBillingSubscriptionMutation.fetcher = (variables?: Types.RemoveBillingSubscriptionMutationVariables, options?: RequestInit['headers']) => fetcher<Types.RemoveBillingSubscriptionMutation, Types.RemoveBillingSubscriptionMutationVariables>(RemoveBillingSubscriptionDocument, variables, options);
export const RemoveEmployerDocument = `
    mutation removeEmployer($id: String!) {
  removeEmployer(id: $id) {
    id
    success
  }
}
    `;
export const useRemoveEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.RemoveEmployerMutation, TError, Types.RemoveEmployerMutationVariables, TContext>) =>
    useMutation<Types.RemoveEmployerMutation, TError, Types.RemoveEmployerMutationVariables, TContext>(
      ['removeEmployer'],
      (variables?: Types.RemoveEmployerMutationVariables) => fetcher<Types.RemoveEmployerMutation, Types.RemoveEmployerMutationVariables>(RemoveEmployerDocument, variables)(),
      options
    );
useRemoveEmployerMutation.getKey = () => ['removeEmployer'];

useRemoveEmployerMutation.fetcher = (variables: Types.RemoveEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.RemoveEmployerMutation, Types.RemoveEmployerMutationVariables>(RemoveEmployerDocument, variables, options);
export const RemovePaymentMethodDocument = `
    mutation removePaymentMethod($clientId: String, $paymentMethodId: String!) {
  removePaymentMethod(clientId: $clientId, paymentMethodId: $paymentMethodId) {
    success
  }
}
    `;
export const useRemovePaymentMethodMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.RemovePaymentMethodMutation, TError, Types.RemovePaymentMethodMutationVariables, TContext>) =>
    useMutation<Types.RemovePaymentMethodMutation, TError, Types.RemovePaymentMethodMutationVariables, TContext>(
      ['removePaymentMethod'],
      (variables?: Types.RemovePaymentMethodMutationVariables) => fetcher<Types.RemovePaymentMethodMutation, Types.RemovePaymentMethodMutationVariables>(RemovePaymentMethodDocument, variables)(),
      options
    );
useRemovePaymentMethodMutation.getKey = () => ['removePaymentMethod'];

useRemovePaymentMethodMutation.fetcher = (variables: Types.RemovePaymentMethodMutationVariables, options?: RequestInit['headers']) => fetcher<Types.RemovePaymentMethodMutation, Types.RemovePaymentMethodMutationVariables>(RemovePaymentMethodDocument, variables, options);
export const ReplaceInterviewerDocument = `
    mutation replaceInterviewer($size: [String!]!, $employerIds: [String!]!, $id: String!) {
  replaceInterviewer(employerIds: $employerIds, id: $id) {
    agreedToTerms
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    changePasswordRequired
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    email
    firstName
    id
    intervieweesNumber
    lastName
    lastSignInAt
    paymentMethod
    permittedEvents
    phone
    scope
    scopesAreAllowedToUpdate
    status
    title
    totalUnreadMessage
  }
}
    `;
export const useReplaceInterviewerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ReplaceInterviewerMutation, TError, Types.ReplaceInterviewerMutationVariables, TContext>) =>
    useMutation<Types.ReplaceInterviewerMutation, TError, Types.ReplaceInterviewerMutationVariables, TContext>(
      ['replaceInterviewer'],
      (variables?: Types.ReplaceInterviewerMutationVariables) => fetcher<Types.ReplaceInterviewerMutation, Types.ReplaceInterviewerMutationVariables>(ReplaceInterviewerDocument, variables)(),
      options
    );
useReplaceInterviewerMutation.getKey = () => ['replaceInterviewer'];

useReplaceInterviewerMutation.fetcher = (variables: Types.ReplaceInterviewerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ReplaceInterviewerMutation, Types.ReplaceInterviewerMutationVariables>(ReplaceInterviewerDocument, variables, options);
export const ReplayDismissedBulletinDocument = `
    mutation replayDismissedBulletin($bulletinIds: [String!]!) {
  replayDismissedBulletin(bulletinIds: $bulletinIds) {
    success
  }
}
    `;
export const useReplayDismissedBulletinMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ReplayDismissedBulletinMutation, TError, Types.ReplayDismissedBulletinMutationVariables, TContext>) =>
    useMutation<Types.ReplayDismissedBulletinMutation, TError, Types.ReplayDismissedBulletinMutationVariables, TContext>(
      ['replayDismissedBulletin'],
      (variables?: Types.ReplayDismissedBulletinMutationVariables) => fetcher<Types.ReplayDismissedBulletinMutation, Types.ReplayDismissedBulletinMutationVariables>(ReplayDismissedBulletinDocument, variables)(),
      options
    );
useReplayDismissedBulletinMutation.getKey = () => ['replayDismissedBulletin'];

useReplayDismissedBulletinMutation.fetcher = (variables: Types.ReplayDismissedBulletinMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ReplayDismissedBulletinMutation, Types.ReplayDismissedBulletinMutationVariables>(ReplayDismissedBulletinDocument, variables, options);
export const ResetPasswordForUserDocument = `
    mutation resetPasswordForUser($password: String!, $passwordConfirmation: String!, $recaptchaToken: String, $token: String!) {
  resetPasswordForUser(
    password: $password
    passwordConfirmation: $passwordConfirmation
    recaptchaToken: $recaptchaToken
    token: $token
  ) {
    success
  }
}
    `;
export const useResetPasswordForUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.ResetPasswordForUserMutation, TError, Types.ResetPasswordForUserMutationVariables, TContext>) =>
    useMutation<Types.ResetPasswordForUserMutation, TError, Types.ResetPasswordForUserMutationVariables, TContext>(
      ['resetPasswordForUser'],
      (variables?: Types.ResetPasswordForUserMutationVariables) => fetcher<Types.ResetPasswordForUserMutation, Types.ResetPasswordForUserMutationVariables>(ResetPasswordForUserDocument, variables)(),
      options
    );
useResetPasswordForUserMutation.getKey = () => ['resetPasswordForUser'];

useResetPasswordForUserMutation.fetcher = (variables: Types.ResetPasswordForUserMutationVariables, options?: RequestInit['headers']) => fetcher<Types.ResetPasswordForUserMutation, Types.ResetPasswordForUserMutationVariables>(ResetPasswordForUserDocument, variables, options);
export const SendOtpCodeDocument = `
    mutation sendOtpCode($jobId: String!, $phoneNumber: String!) {
  sendOtpCode(phoneNumber: $phoneNumber) {
    success
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useSendOtpCodeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SendOtpCodeMutation, TError, Types.SendOtpCodeMutationVariables, TContext>) =>
    useMutation<Types.SendOtpCodeMutation, TError, Types.SendOtpCodeMutationVariables, TContext>(
      ['sendOtpCode'],
      (variables?: Types.SendOtpCodeMutationVariables) => fetcher<Types.SendOtpCodeMutation, Types.SendOtpCodeMutationVariables>(SendOtpCodeDocument, variables)(),
      options
    );
useSendOtpCodeMutation.getKey = () => ['sendOtpCode'];

useSendOtpCodeMutation.fetcher = (variables: Types.SendOtpCodeMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SendOtpCodeMutation, Types.SendOtpCodeMutationVariables>(SendOtpCodeDocument, variables, options);
export const SendPasswordResetEmployerDocument = `
    mutation sendPasswordResetEmployer($email: String!) {
  sendPasswordResetEmployer(email: $email) {
    success
  }
}
    `;
export const useSendPasswordResetEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SendPasswordResetEmployerMutation, TError, Types.SendPasswordResetEmployerMutationVariables, TContext>) =>
    useMutation<Types.SendPasswordResetEmployerMutation, TError, Types.SendPasswordResetEmployerMutationVariables, TContext>(
      ['sendPasswordResetEmployer'],
      (variables?: Types.SendPasswordResetEmployerMutationVariables) => fetcher<Types.SendPasswordResetEmployerMutation, Types.SendPasswordResetEmployerMutationVariables>(SendPasswordResetEmployerDocument, variables)(),
      options
    );
useSendPasswordResetEmployerMutation.getKey = () => ['sendPasswordResetEmployer'];

useSendPasswordResetEmployerMutation.fetcher = (variables: Types.SendPasswordResetEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SendPasswordResetEmployerMutation, Types.SendPasswordResetEmployerMutationVariables>(SendPasswordResetEmployerDocument, variables, options);
export const SendPasswordResetWorkerDocument = `
    mutation sendPasswordResetWorker($email: String!) {
  sendPasswordResetWorker(email: $email) {
    success
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
export const SetDefaultPaymentMethodDocument = `
    mutation setDefaultPaymentMethod($paymentMethodId: String!) {
  setDefaultPaymentMethod(paymentMethodId: $paymentMethodId) {
    success
  }
}
    `;
export const useSetDefaultPaymentMethodMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SetDefaultPaymentMethodMutation, TError, Types.SetDefaultPaymentMethodMutationVariables, TContext>) =>
    useMutation<Types.SetDefaultPaymentMethodMutation, TError, Types.SetDefaultPaymentMethodMutationVariables, TContext>(
      ['setDefaultPaymentMethod'],
      (variables?: Types.SetDefaultPaymentMethodMutationVariables) => fetcher<Types.SetDefaultPaymentMethodMutation, Types.SetDefaultPaymentMethodMutationVariables>(SetDefaultPaymentMethodDocument, variables)(),
      options
    );
useSetDefaultPaymentMethodMutation.getKey = () => ['setDefaultPaymentMethod'];

useSetDefaultPaymentMethodMutation.fetcher = (variables: Types.SetDefaultPaymentMethodMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SetDefaultPaymentMethodMutation, Types.SetDefaultPaymentMethodMutationVariables>(SetDefaultPaymentMethodDocument, variables, options);
export const SignInEmployerDocument = `
    mutation signInEmployer($email: String!, $password: String!, $recaptchaToken: String) {
  signInEmployer(
    email: $email
    password: $password
    recaptchaToken: $recaptchaToken
  ) {
    authToken
    employer {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
  }
}
    `;
export const useSignInEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SignInEmployerMutation, TError, Types.SignInEmployerMutationVariables, TContext>) =>
    useMutation<Types.SignInEmployerMutation, TError, Types.SignInEmployerMutationVariables, TContext>(
      ['signInEmployer'],
      (variables?: Types.SignInEmployerMutationVariables) => fetcher<Types.SignInEmployerMutation, Types.SignInEmployerMutationVariables>(SignInEmployerDocument, variables)(),
      options
    );
useSignInEmployerMutation.getKey = () => ['signInEmployer'];

useSignInEmployerMutation.fetcher = (variables: Types.SignInEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SignInEmployerMutation, Types.SignInEmployerMutationVariables>(SignInEmployerDocument, variables, options);
export const SignInWorkerDocument = `
    mutation signInWorker($jobId: String!, $email: String!, $password: String!, $recaptchaToken: String, $socialAuthenticationId: String) {
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
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
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
export const SignOutEmployerDocument = `
    mutation signOutEmployer {
  signOutEmployer {
    success
  }
}
    `;
export const useSignOutEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SignOutEmployerMutation, TError, Types.SignOutEmployerMutationVariables, TContext>) =>
    useMutation<Types.SignOutEmployerMutation, TError, Types.SignOutEmployerMutationVariables, TContext>(
      ['signOutEmployer'],
      (variables?: Types.SignOutEmployerMutationVariables) => fetcher<Types.SignOutEmployerMutation, Types.SignOutEmployerMutationVariables>(SignOutEmployerDocument, variables)(),
      options
    );
useSignOutEmployerMutation.getKey = () => ['signOutEmployer'];

useSignOutEmployerMutation.fetcher = (variables?: Types.SignOutEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SignOutEmployerMutation, Types.SignOutEmployerMutationVariables>(SignOutEmployerDocument, variables, options);
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
export const SignUpEmployerDocument = `
    mutation signUpEmployer($agreedToTerms: Boolean, $avatarSignedBlobId: String, $clientAttributes: ClientArgument!, $email: String, $firstName: String, $lastName: String, $password: String, $passwordConfirmation: String, $paymentMethod: String, $phone: String, $recaptchaToken: String, $scope: EmployerScopeEnum, $source: SignupSourceEnum, $title: String) {
  signUpEmployer(
    agreedToTerms: $agreedToTerms
    avatarSignedBlobId: $avatarSignedBlobId
    clientAttributes: $clientAttributes
    email: $email
    firstName: $firstName
    lastName: $lastName
    password: $password
    passwordConfirmation: $passwordConfirmation
    paymentMethod: $paymentMethod
    phone: $phone
    recaptchaToken: $recaptchaToken
    scope: $scope
    source: $source
    title: $title
  ) {
    success
  }
}
    `;
export const useSignUpEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SignUpEmployerMutation, TError, Types.SignUpEmployerMutationVariables, TContext>) =>
    useMutation<Types.SignUpEmployerMutation, TError, Types.SignUpEmployerMutationVariables, TContext>(
      ['signUpEmployer'],
      (variables?: Types.SignUpEmployerMutationVariables) => fetcher<Types.SignUpEmployerMutation, Types.SignUpEmployerMutationVariables>(SignUpEmployerDocument, variables)(),
      options
    );
useSignUpEmployerMutation.getKey = () => ['signUpEmployer'];

useSignUpEmployerMutation.fetcher = (variables: Types.SignUpEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SignUpEmployerMutation, Types.SignUpEmployerMutationVariables>(SignUpEmployerDocument, variables, options);
export const SkipScreenStepDocument = `
    mutation skipScreenStep($visibleIds: [String!]) {
  skipScreenStep(visibleIds: $visibleIds) {
    completed
    description
    id
    target
    title
  }
}
    `;
export const useSkipScreenStepMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SkipScreenStepMutation, TError, Types.SkipScreenStepMutationVariables, TContext>) =>
    useMutation<Types.SkipScreenStepMutation, TError, Types.SkipScreenStepMutationVariables, TContext>(
      ['skipScreenStep'],
      (variables?: Types.SkipScreenStepMutationVariables) => fetcher<Types.SkipScreenStepMutation, Types.SkipScreenStepMutationVariables>(SkipScreenStepDocument, variables)(),
      options
    );
useSkipScreenStepMutation.getKey = () => ['skipScreenStep'];

useSkipScreenStepMutation.fetcher = (variables?: Types.SkipScreenStepMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SkipScreenStepMutation, Types.SkipScreenStepMutationVariables>(SkipScreenStepDocument, variables, options);
export const StartWorkerOnboardingDocument = `
    mutation startWorkerOnboarding($jobId: String!, $id: String!) {
  startWorkerOnboarding(id: $id) {
    companyOnboardingId
    currentPartIndex
    id
    message
    numOfCompletedSteps
    pendingWorkerOnboardingPart {
      id
      integration {
        __typename
        ... on GroupOnboardingPart {
          id
          state
        }
        ... on ProfileOnboarding {
          id
        }
        ... on UserTermsOfService {
          agreedAt
          id
        }
        ... on WorkExperienceOverview {
          discipline
          id
          primarySpecialty
          secondarySpecialty
          yearsOfExperience
        }
        ... on WorkerCertificationOverview {
          id
        }
        ... on WorkerEducationOverview {
          id
        }
        ... on WorkerReferenceOnboarding {
          id
        }
      }
      integrationConfigurations
      integrationObject
      state
      workerId
    }
    percentageCompleted
    permittedEvents
    state
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useStartWorkerOnboardingMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.StartWorkerOnboardingMutation, TError, Types.StartWorkerOnboardingMutationVariables, TContext>) =>
    useMutation<Types.StartWorkerOnboardingMutation, TError, Types.StartWorkerOnboardingMutationVariables, TContext>(
      ['startWorkerOnboarding'],
      (variables?: Types.StartWorkerOnboardingMutationVariables) => fetcher<Types.StartWorkerOnboardingMutation, Types.StartWorkerOnboardingMutationVariables>(StartWorkerOnboardingDocument, variables)(),
      options
    );
useStartWorkerOnboardingMutation.getKey = () => ['startWorkerOnboarding'];

useStartWorkerOnboardingMutation.fetcher = (variables: Types.StartWorkerOnboardingMutationVariables, options?: RequestInit['headers']) => fetcher<Types.StartWorkerOnboardingMutation, Types.StartWorkerOnboardingMutationVariables>(StartWorkerOnboardingDocument, variables, options);
export const SyncAnonymousWorkerDataDocument = `
    mutation syncAnonymousWorkerData($jobId: String!, $bookmarkJobsAttributes: [BookmarkJobArgument!], $likeJobsAttributes: [LikeJobArgument!], $savedFiltersAttributes: [SavedFilterArgument!], $workerViewedJobsAttributes: [WorkerViewedJobArgument!]) {
  syncAnonymousWorkerData(
    bookmarkJobsAttributes: $bookmarkJobsAttributes
    likeJobsAttributes: $likeJobsAttributes
    savedFiltersAttributes: $savedFiltersAttributes
    workerViewedJobsAttributes: $workerViewedJobsAttributes
  ) {
    success
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useSyncAnonymousWorkerDataMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.SyncAnonymousWorkerDataMutation, TError, Types.SyncAnonymousWorkerDataMutationVariables, TContext>) =>
    useMutation<Types.SyncAnonymousWorkerDataMutation, TError, Types.SyncAnonymousWorkerDataMutationVariables, TContext>(
      ['syncAnonymousWorkerData'],
      (variables?: Types.SyncAnonymousWorkerDataMutationVariables) => fetcher<Types.SyncAnonymousWorkerDataMutation, Types.SyncAnonymousWorkerDataMutationVariables>(SyncAnonymousWorkerDataDocument, variables)(),
      options
    );
useSyncAnonymousWorkerDataMutation.getKey = () => ['syncAnonymousWorkerData'];

useSyncAnonymousWorkerDataMutation.fetcher = (variables: Types.SyncAnonymousWorkerDataMutationVariables, options?: RequestInit['headers']) => fetcher<Types.SyncAnonymousWorkerDataMutation, Types.SyncAnonymousWorkerDataMutationVariables>(SyncAnonymousWorkerDataDocument, variables, options);
export const UnblockWorkerDocument = `
    mutation unblockWorker($id: String!) {
  unblockWorker(id: $id) {
    success
  }
}
    `;
export const useUnblockWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UnblockWorkerMutation, TError, Types.UnblockWorkerMutationVariables, TContext>) =>
    useMutation<Types.UnblockWorkerMutation, TError, Types.UnblockWorkerMutationVariables, TContext>(
      ['unblockWorker'],
      (variables?: Types.UnblockWorkerMutationVariables) => fetcher<Types.UnblockWorkerMutation, Types.UnblockWorkerMutationVariables>(UnblockWorkerDocument, variables)(),
      options
    );
useUnblockWorkerMutation.getKey = () => ['unblockWorker'];

useUnblockWorkerMutation.fetcher = (variables: Types.UnblockWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UnblockWorkerMutation, Types.UnblockWorkerMutationVariables>(UnblockWorkerDocument, variables, options);
export const UpdateBillingSubscriptionDocument = `
    mutation updateBillingSubscription($billingPriceId: String!, $clientId: String, $paymentMethodId: String!) {
  updateBillingSubscription(
    billingPriceId: $billingPriceId
    clientId: $clientId
    paymentMethodId: $paymentMethodId
  ) {
    success
  }
}
    `;
export const useUpdateBillingSubscriptionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateBillingSubscriptionMutation, TError, Types.UpdateBillingSubscriptionMutationVariables, TContext>) =>
    useMutation<Types.UpdateBillingSubscriptionMutation, TError, Types.UpdateBillingSubscriptionMutationVariables, TContext>(
      ['updateBillingSubscription'],
      (variables?: Types.UpdateBillingSubscriptionMutationVariables) => fetcher<Types.UpdateBillingSubscriptionMutation, Types.UpdateBillingSubscriptionMutationVariables>(UpdateBillingSubscriptionDocument, variables)(),
      options
    );
useUpdateBillingSubscriptionMutation.getKey = () => ['updateBillingSubscription'];

useUpdateBillingSubscriptionMutation.fetcher = (variables: Types.UpdateBillingSubscriptionMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateBillingSubscriptionMutation, Types.UpdateBillingSubscriptionMutationVariables>(UpdateBillingSubscriptionDocument, variables, options);
export const UpdateClientDocument = `
    mutation updateClient($size: [String!]!, $address1: String, $address2: String, $city: String, $contactEmail: String, $contactFirstName: String, $contactLastName: String, $contactPhone: String, $country: String, $description: String, $ein: String, $id: String!, $imageSignedBlobId: String, $latitude: BigDecimal, $longitude: BigDecimal, $name: String!, $phone: String, $source: SignupSourceEnum, $state: String, $taxId: String, $url: String, $zipCode: String) {
  updateClient(
    address1: $address1
    address2: $address2
    city: $city
    contactEmail: $contactEmail
    contactFirstName: $contactFirstName
    contactLastName: $contactLastName
    contactPhone: $contactPhone
    country: $country
    description: $description
    ein: $ein
    id: $id
    imageSignedBlobId: $imageSignedBlobId
    latitude: $latitude
    longitude: $longitude
    name: $name
    phone: $phone
    source: $source
    state: $state
    taxId: $taxId
    url: $url
    zipCode: $zipCode
  ) {
    address1
    address2
    billingPlan {
      active
      description
      id
      imageUrl
      isFree
      name
    }
    city
    contactEmail
    contactFirstName
    contactLastName
    contactName
    contactPhone
    country
    description
    ein
    id
    image {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    latitude
    longitude
    name
    phone
    state
    status
    taxId
    url
    verifiedAt
    verifiedBy {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    verifyStatus
    zipCode
  }
}
    `;
export const useUpdateClientMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateClientMutation, TError, Types.UpdateClientMutationVariables, TContext>) =>
    useMutation<Types.UpdateClientMutation, TError, Types.UpdateClientMutationVariables, TContext>(
      ['updateClient'],
      (variables?: Types.UpdateClientMutationVariables) => fetcher<Types.UpdateClientMutation, Types.UpdateClientMutationVariables>(UpdateClientDocument, variables)(),
      options
    );
useUpdateClientMutation.getKey = () => ['updateClient'];

useUpdateClientMutation.fetcher = (variables: Types.UpdateClientMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateClientMutation, Types.UpdateClientMutationVariables>(UpdateClientDocument, variables, options);
export const UpdateCompanyOnboardingDocument = `
    mutation updateCompanyOnboarding($description: String, $id: String!, $name: String, $referenceUrl: String) {
  updateCompanyOnboarding(
    description: $description
    id: $id
    name: $name
    referenceUrl: $referenceUrl
  ) {
    companyId
    description
    id
    name
    onboardingPartsNumber
    referenceUrl
  }
}
    `;
export const useUpdateCompanyOnboardingMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateCompanyOnboardingMutation, TError, Types.UpdateCompanyOnboardingMutationVariables, TContext>) =>
    useMutation<Types.UpdateCompanyOnboardingMutation, TError, Types.UpdateCompanyOnboardingMutationVariables, TContext>(
      ['updateCompanyOnboarding'],
      (variables?: Types.UpdateCompanyOnboardingMutationVariables) => fetcher<Types.UpdateCompanyOnboardingMutation, Types.UpdateCompanyOnboardingMutationVariables>(UpdateCompanyOnboardingDocument, variables)(),
      options
    );
useUpdateCompanyOnboardingMutation.getKey = () => ['updateCompanyOnboarding'];

useUpdateCompanyOnboardingMutation.fetcher = (variables: Types.UpdateCompanyOnboardingMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateCompanyOnboardingMutation, Types.UpdateCompanyOnboardingMutationVariables>(UpdateCompanyOnboardingDocument, variables, options);
export const UpdateDraftJobDocument = `
    mutation updateDraftJob($accountId: String, $address: String, $address2: String, $benefitContent: String, $certificationsRequired: String, $city: String, $clientId: String, $complianceRequirements: [String!], $country: String, $customStartDate: String, $deletedBy: String, $description: String, $discipline: String, $duration: Int, $durationType: String, $employerOfRecord: JobEmployerOfRecordEnum, $exclusiveJob: String, $facilityType: String, $frequency: String, $hospital: String, $hoursPerWeek: Int, $id: String!, $isAsap: Boolean, $isSkillChecklist: Boolean, $jobInvitationsAttributes: [JobInvitationArgument!], $jobType: String, $latitude: BigDecimal, $licenseStateCompact: Boolean, $licenseStateRequired: [String!], $licensesRequired: [String!], $locationId: String, $longitude: BigDecimal, $minExpYear: Int, $minWeeklyPayAmount: Float, $profileRequirements: [String!], $recommendType: JobRecommendTypeEnum, $requirementNotes: String, $scope: String, $shifts: [String!], $skillId: Int, $skillLongName: String, $skillName: String, $slotsNumber: Int, $slug: String, $source: String, $specialty: [String!], $startDate: ISO8601DateTime, $state: String, $title: String, $weeklyPayAmount: Float, $zipcode: String) {
  updateDraftJob(
    accountId: $accountId
    address: $address
    address2: $address2
    benefitContent: $benefitContent
    certificationsRequired: $certificationsRequired
    city: $city
    clientId: $clientId
    complianceRequirements: $complianceRequirements
    country: $country
    customStartDate: $customStartDate
    deletedBy: $deletedBy
    description: $description
    discipline: $discipline
    duration: $duration
    durationType: $durationType
    employerOfRecord: $employerOfRecord
    exclusiveJob: $exclusiveJob
    facilityType: $facilityType
    frequency: $frequency
    hospital: $hospital
    hoursPerWeek: $hoursPerWeek
    id: $id
    isAsap: $isAsap
    isSkillChecklist: $isSkillChecklist
    jobInvitationsAttributes: $jobInvitationsAttributes
    jobType: $jobType
    latitude: $latitude
    licenseStateCompact: $licenseStateCompact
    licenseStateRequired: $licenseStateRequired
    licensesRequired: $licensesRequired
    locationId: $locationId
    longitude: $longitude
    minExpYear: $minExpYear
    minWeeklyPayAmount: $minWeeklyPayAmount
    profileRequirements: $profileRequirements
    recommendType: $recommendType
    requirementNotes: $requirementNotes
    scope: $scope
    shifts: $shifts
    skillId: $skillId
    skillLongName: $skillLongName
    skillName: $skillName
    slotsNumber: $slotsNumber
    slug: $slug
    source: $source
    specialty: $specialty
    startDate: $startDate
    state: $state
    title: $title
    weeklyPayAmount: $weeklyPayAmount
    zipcode: $zipcode
  ) {
    address
    address2
    benefitContent
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    draftId
    duration
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    frequency
    hospital
    hoursPerWeek
    id
    isAsap
    isSkillChecklist
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    minExpYear
    minWeeklyPayAmount
    profileRequirements
    publishedAt
    requirementNotes
    scope
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const useUpdateDraftJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateDraftJobMutation, TError, Types.UpdateDraftJobMutationVariables, TContext>) =>
    useMutation<Types.UpdateDraftJobMutation, TError, Types.UpdateDraftJobMutationVariables, TContext>(
      ['updateDraftJob'],
      (variables?: Types.UpdateDraftJobMutationVariables) => fetcher<Types.UpdateDraftJobMutation, Types.UpdateDraftJobMutationVariables>(UpdateDraftJobDocument, variables)(),
      options
    );
useUpdateDraftJobMutation.getKey = () => ['updateDraftJob'];

useUpdateDraftJobMutation.fetcher = (variables: Types.UpdateDraftJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateDraftJobMutation, Types.UpdateDraftJobMutationVariables>(UpdateDraftJobDocument, variables, options);
export const UpdateEmployerDocument = `
    mutation updateEmployer($size: [String!]!, $agreedToTerms: Boolean, $avatarSignedBlobId: String, $email: String, $firstName: String, $id: String!, $lastName: String, $password: String, $passwordConfirmation: String, $paymentMethod: String, $phone: String, $scope: EmployerScopeEnum, $source: SignupSourceEnum, $title: String) {
  updateEmployer(
    agreedToTerms: $agreedToTerms
    avatarSignedBlobId: $avatarSignedBlobId
    email: $email
    firstName: $firstName
    id: $id
    lastName: $lastName
    password: $password
    passwordConfirmation: $passwordConfirmation
    paymentMethod: $paymentMethod
    phone: $phone
    scope: $scope
    source: $source
    title: $title
  ) {
    agreedToTerms
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    changePasswordRequired
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    email
    firstName
    id
    intervieweesNumber
    lastName
    lastSignInAt
    paymentMethod
    permittedEvents
    phone
    scope
    scopesAreAllowedToUpdate
    status
    title
    totalUnreadMessage
  }
}
    `;
export const useUpdateEmployerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateEmployerMutation, TError, Types.UpdateEmployerMutationVariables, TContext>) =>
    useMutation<Types.UpdateEmployerMutation, TError, Types.UpdateEmployerMutationVariables, TContext>(
      ['updateEmployer'],
      (variables?: Types.UpdateEmployerMutationVariables) => fetcher<Types.UpdateEmployerMutation, Types.UpdateEmployerMutationVariables>(UpdateEmployerDocument, variables)(),
      options
    );
useUpdateEmployerMutation.getKey = () => ['updateEmployer'];

useUpdateEmployerMutation.fetcher = (variables: Types.UpdateEmployerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateEmployerMutation, Types.UpdateEmployerMutationVariables>(UpdateEmployerDocument, variables, options);
export const UpdateIntegrationWorkerDocument = `
    mutation updateIntegrationWorker($size: [String!]!, $jobId: String!, $size1: [String!]!, $avatarImageBase64: String, $avatarImageFileName: String, $companyId: String, $email: String, $emergencyContactAttributes: EmergencyContactArgument, $firstName: String, $id: String!, $lastName: String, $maidenName: String, $password: String, $passwordConfirmation: String, $phone: String, $resumesSignedBlobIds: [String!], $workExperiencesAttributes: [WorkExperienceArgument!], $workerAddressAttributes: WorkerAddressArgument, $workerCertificationsAttributes: [WorkerCertificationArgument!], $workerReferencesAttributes: [WorkerReferenceArgument!], $workingAuthorizationAttributes: WorkingAuthorizationArgument) {
  updateIntegrationWorker(
    avatarImageBase64: $avatarImageBase64
    avatarImageFileName: $avatarImageFileName
    companyId: $companyId
    email: $email
    emergencyContactAttributes: $emergencyContactAttributes
    firstName: $firstName
    id: $id
    lastName: $lastName
    maidenName: $maidenName
    password: $password
    passwordConfirmation: $passwordConfirmation
    phone: $phone
    resumesSignedBlobIds: $resumesSignedBlobIds
    workExperiencesAttributes: $workExperiencesAttributes
    workerAddressAttributes: $workerAddressAttributes
    workerCertificationsAttributes: $workerCertificationsAttributes
    workerReferencesAttributes: $workerReferencesAttributes
    workingAuthorizationAttributes: $workingAuthorizationAttributes
  ) {
    agreedToTerms
    availableStartDate
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    avatarUrl
    blocked
    blockedClient {
      note
    }
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
    dateOfBirth
    email
    emergencyContact {
      contactName
      contactPhone
      contactRelationship
      id
      workerId
    }
    employmentType
    facilityTypes
    firstName
    hasActiveAssignment
    id
    isFavorited
    jobCategoriesWorkedNumber
    jobMatchingScore(jobId: $jobId)
    lastName
    lastOtpExpiredAt
    lastSignInAt
    locationsWorkedNumber
    maidenName
    noCall
    noEmail
    noNotification
    noSms
    noTalentMatches
    notificationSetting {
      assignmentEndingReminder
      completeOnboarding
      documentExpired
      id
      interviewInvitationExpired
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
    profilePercentageCompleted
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
    remainingExpirationTime
    resumes {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size1)
      thumbnails
    }
    shiftRequested
    socialSecurityNumber
    supportDocuments {
      documentType
      id
    }
    timeOffRequested
    totalUnreadMessage
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
    workerCertifications {
      certificationType
      compactLicense
      createdAt
      expirationDate
      id
      licenseDiscipline
      licenseNumber
      licenseState
      title
    }
    workerEducations {
      city
      country
      createdAt
      degreeDate
      degreeName
      id
      major
      schoolName
      state
    }
    workerNotes {
      id
      note
      noteType
    }
    workerOnboardings {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
    workerReferences {
      city
      contactEmail
      contactFirstName
      contactFullName
      contactLastName
      contactPhone
      createdAt
      facilityName
      id
      jobTitle
      refType
      relationship
      salutation
      state
      workedFrom
      workedTo
    }
    workerSpecialties {
      category
      completedChecklist
      id
      isExpired
      isPrimary
      specialty
      specialtyId
      specialtyLongName
      status
    }
    workingAuthorization {
      dateOfBirth
      id
      idPhotoUrl
      legalRightToWork
      socialSecurityNumber
      workerId
    }
    workingPreferredLocations {
      id
      preferredWorkingCity
      preferredWorkingState
    }
  }
}
    `;
export const useUpdateIntegrationWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateIntegrationWorkerMutation, TError, Types.UpdateIntegrationWorkerMutationVariables, TContext>) =>
    useMutation<Types.UpdateIntegrationWorkerMutation, TError, Types.UpdateIntegrationWorkerMutationVariables, TContext>(
      ['updateIntegrationWorker'],
      (variables?: Types.UpdateIntegrationWorkerMutationVariables) => fetcher<Types.UpdateIntegrationWorkerMutation, Types.UpdateIntegrationWorkerMutationVariables>(UpdateIntegrationWorkerDocument, variables)(),
      options
    );
useUpdateIntegrationWorkerMutation.getKey = () => ['updateIntegrationWorker'];

useUpdateIntegrationWorkerMutation.fetcher = (variables: Types.UpdateIntegrationWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateIntegrationWorkerMutation, Types.UpdateIntegrationWorkerMutationVariables>(UpdateIntegrationWorkerDocument, variables, options);
export const UpdateJobDocument = `
    mutation updateJob($accountId: String, $address: String, $address2: String, $benefitContent: String, $certificationsRequired: String, $city: String, $clientId: String, $complianceRequirements: [String!], $country: String, $customStartDate: String, $deletedBy: String, $description: String, $discipline: String, $duration: Int, $durationType: String, $employerOfRecord: JobEmployerOfRecordEnum, $exclusiveJob: String, $facilityType: String, $frequency: String, $hospital: String, $hoursPerWeek: Int, $id: String!, $isAsap: Boolean, $isSkillChecklist: Boolean, $jobInvitationsAttributes: [JobInvitationArgument!], $jobType: String, $latitude: BigDecimal, $licenseStateCompact: Boolean, $licenseStateRequired: [String!], $licensesRequired: [String!], $locationId: String, $longitude: BigDecimal, $minExpYear: Int, $minWeeklyPayAmount: Float, $profileRequirements: [String!], $recommendType: JobRecommendTypeEnum, $requirementNotes: String, $scope: String, $shifts: [String!], $skillId: Int, $skillLongName: String, $skillName: String, $slotsNumber: Int, $slug: String, $source: String, $specialty: [String!], $startDate: ISO8601DateTime, $state: String, $title: String, $weeklyPayAmount: Float, $zipcode: String) {
  updateJob(
    accountId: $accountId
    address: $address
    address2: $address2
    benefitContent: $benefitContent
    certificationsRequired: $certificationsRequired
    city: $city
    clientId: $clientId
    complianceRequirements: $complianceRequirements
    country: $country
    customStartDate: $customStartDate
    deletedBy: $deletedBy
    description: $description
    discipline: $discipline
    duration: $duration
    durationType: $durationType
    employerOfRecord: $employerOfRecord
    exclusiveJob: $exclusiveJob
    facilityType: $facilityType
    frequency: $frequency
    hospital: $hospital
    hoursPerWeek: $hoursPerWeek
    id: $id
    isAsap: $isAsap
    isSkillChecklist: $isSkillChecklist
    jobInvitationsAttributes: $jobInvitationsAttributes
    jobType: $jobType
    latitude: $latitude
    licenseStateCompact: $licenseStateCompact
    licenseStateRequired: $licenseStateRequired
    licensesRequired: $licensesRequired
    locationId: $locationId
    longitude: $longitude
    minExpYear: $minExpYear
    minWeeklyPayAmount: $minWeeklyPayAmount
    profileRequirements: $profileRequirements
    recommendType: $recommendType
    requirementNotes: $requirementNotes
    scope: $scope
    shifts: $shifts
    skillId: $skillId
    skillLongName: $skillLongName
    skillName: $skillName
    slotsNumber: $slotsNumber
    slug: $slug
    source: $source
    specialty: $specialty
    startDate: $startDate
    state: $state
    title: $title
    weeklyPayAmount: $weeklyPayAmount
    zipcode: $zipcode
  ) {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    distance
    distanceToCurrentUserSearchLocation
    draftId
    duration
    durationType
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hospital
    hoursPerWeek
    id
    images
    isAsap
    isBookmarked
    isDisliked
    isFavorited
    isLiked
    isSkillChecklist
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    latitude
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    locationImage {
      city
      id
      state
    }
    longitude
    matchingPercentage
    minExpYear
    minWeeklyPayAmount
    noTalentMatches
    profileRequirements
    publishedAt
    requirementNotes
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const useUpdateJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateJobMutation, TError, Types.UpdateJobMutationVariables, TContext>) =>
    useMutation<Types.UpdateJobMutation, TError, Types.UpdateJobMutationVariables, TContext>(
      ['updateJob'],
      (variables?: Types.UpdateJobMutationVariables) => fetcher<Types.UpdateJobMutation, Types.UpdateJobMutationVariables>(UpdateJobDocument, variables)(),
      options
    );
useUpdateJobMutation.getKey = () => ['updateJob'];

useUpdateJobMutation.fetcher = (variables: Types.UpdateJobMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateJobMutation, Types.UpdateJobMutationVariables>(UpdateJobDocument, variables, options);
export const UpdateJobTemplateDocument = `
    mutation updateJobTemplate($accountId: String, $address: String, $address2: String, $benefitContent: String, $certificationsRequired: String, $city: String, $clientId: String, $complianceRequirements: [String!], $country: String, $customStartDate: String, $deletedBy: String, $description: String, $discipline: String, $duration: Int, $durationType: String, $employerOfRecord: JobEmployerOfRecordEnum, $exclusiveJob: String, $facilityType: String, $frequency: String, $hospital: String, $hoursPerWeek: Int, $id: String!, $isAsap: Boolean, $isSkillChecklist: Boolean, $jobInvitationsAttributes: [JobInvitationArgument!], $jobType: String, $latitude: BigDecimal, $licenseStateCompact: Boolean, $licenseStateRequired: [String!], $licensesRequired: [String!], $locationId: String, $longitude: BigDecimal, $minExpYear: Int, $minWeeklyPayAmount: Float, $profileRequirements: [String!], $recommendType: JobRecommendTypeEnum, $requirementNotes: String, $scope: String, $shifts: [String!], $skillId: Int, $skillLongName: String, $skillName: String, $slotsNumber: Int, $slug: String, $source: String, $specialty: [String!], $startDate: ISO8601DateTime, $state: String, $templateName: String!, $title: String, $weeklyPayAmount: Float, $zipcode: String) {
  updateJobTemplate(
    accountId: $accountId
    address: $address
    address2: $address2
    benefitContent: $benefitContent
    certificationsRequired: $certificationsRequired
    city: $city
    clientId: $clientId
    complianceRequirements: $complianceRequirements
    country: $country
    customStartDate: $customStartDate
    deletedBy: $deletedBy
    description: $description
    discipline: $discipline
    duration: $duration
    durationType: $durationType
    employerOfRecord: $employerOfRecord
    exclusiveJob: $exclusiveJob
    facilityType: $facilityType
    frequency: $frequency
    hospital: $hospital
    hoursPerWeek: $hoursPerWeek
    id: $id
    isAsap: $isAsap
    isSkillChecklist: $isSkillChecklist
    jobInvitationsAttributes: $jobInvitationsAttributes
    jobType: $jobType
    latitude: $latitude
    licenseStateCompact: $licenseStateCompact
    licenseStateRequired: $licenseStateRequired
    licensesRequired: $licensesRequired
    locationId: $locationId
    longitude: $longitude
    minExpYear: $minExpYear
    minWeeklyPayAmount: $minWeeklyPayAmount
    profileRequirements: $profileRequirements
    recommendType: $recommendType
    requirementNotes: $requirementNotes
    scope: $scope
    shifts: $shifts
    skillId: $skillId
    skillLongName: $skillLongName
    skillName: $skillName
    slotsNumber: $slotsNumber
    slug: $slug
    source: $source
    specialty: $specialty
    startDate: $startDate
    state: $state
    templateName: $templateName
    title: $title
    weeklyPayAmount: $weeklyPayAmount
    zipcode: $zipcode
  ) {
    clientId
    companyId
    data {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    id
    templateName
  }
}
    `;
export const useUpdateJobTemplateMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateJobTemplateMutation, TError, Types.UpdateJobTemplateMutationVariables, TContext>) =>
    useMutation<Types.UpdateJobTemplateMutation, TError, Types.UpdateJobTemplateMutationVariables, TContext>(
      ['updateJobTemplate'],
      (variables?: Types.UpdateJobTemplateMutationVariables) => fetcher<Types.UpdateJobTemplateMutation, Types.UpdateJobTemplateMutationVariables>(UpdateJobTemplateDocument, variables)(),
      options
    );
useUpdateJobTemplateMutation.getKey = () => ['updateJobTemplate'];

useUpdateJobTemplateMutation.fetcher = (variables: Types.UpdateJobTemplateMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateJobTemplateMutation, Types.UpdateJobTemplateMutationVariables>(UpdateJobTemplateDocument, variables, options);
export const UpdateLocationDocument = `
    mutation updateLocation($address: String, $addressState: String, $city: String, $clientId: String, $country: String, $id: String!, $latitude: BigDecimal, $longitude: BigDecimal, $name: String, $phone: String, $zipcode: String) {
  updateLocation(
    address: $address
    addressState: $addressState
    city: $city
    clientId: $clientId
    country: $country
    id: $id
    latitude: $latitude
    longitude: $longitude
    name: $name
    phone: $phone
    zipcode: $zipcode
  ) {
    active
    address
    addressState
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    clientId
    companyId
    country
    distanceToCurrentUserSearchLocation
    id
    latitude
    longitude
    name
    phone
    region
    statusUpdatedAt
    statusUpdater {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    zipcode
  }
}
    `;
export const useUpdateLocationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateLocationMutation, TError, Types.UpdateLocationMutationVariables, TContext>) =>
    useMutation<Types.UpdateLocationMutation, TError, Types.UpdateLocationMutationVariables, TContext>(
      ['updateLocation'],
      (variables?: Types.UpdateLocationMutationVariables) => fetcher<Types.UpdateLocationMutation, Types.UpdateLocationMutationVariables>(UpdateLocationDocument, variables)(),
      options
    );
useUpdateLocationMutation.getKey = () => ['updateLocation'];

useUpdateLocationMutation.fetcher = (variables: Types.UpdateLocationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateLocationMutation, Types.UpdateLocationMutationVariables>(UpdateLocationDocument, variables, options);
export const UpdateNotificationSettingDocument = `
    mutation updateNotificationSetting($assignmentEndingReminder: Boolean, $completeOnboarding: Boolean, $documentExpired: Boolean, $interviewInvitationExpired: Boolean, $jobAlert: Boolean, $jobsRecommendation: Boolean, $licenseExpired: Boolean, $licenseExpiredOptions: JSON, $licenseWillBeExpiredOptions: JSON, $timecardSubmissionReminder: Boolean) {
  updateNotificationSetting(
    assignmentEndingReminder: $assignmentEndingReminder
    completeOnboarding: $completeOnboarding
    documentExpired: $documentExpired
    interviewInvitationExpired: $interviewInvitationExpired
    jobAlert: $jobAlert
    jobsRecommendation: $jobsRecommendation
    licenseExpired: $licenseExpired
    licenseExpiredOptions: $licenseExpiredOptions
    licenseWillBeExpiredOptions: $licenseWillBeExpiredOptions
    timecardSubmissionReminder: $timecardSubmissionReminder
  ) {
    assignmentEndingReminder
    completeOnboarding
    documentExpired
    id
    interviewInvitationExpired
    jobAlert
    jobsRecommendation
    licenseExpired
    licenseExpiredOptions
    licenseWillBeExpiredOptions
    timecardSubmissionReminder
  }
}
    `;
export const useUpdateNotificationSettingMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateNotificationSettingMutation, TError, Types.UpdateNotificationSettingMutationVariables, TContext>) =>
    useMutation<Types.UpdateNotificationSettingMutation, TError, Types.UpdateNotificationSettingMutationVariables, TContext>(
      ['updateNotificationSetting'],
      (variables?: Types.UpdateNotificationSettingMutationVariables) => fetcher<Types.UpdateNotificationSettingMutation, Types.UpdateNotificationSettingMutationVariables>(UpdateNotificationSettingDocument, variables)(),
      options
    );
useUpdateNotificationSettingMutation.getKey = () => ['updateNotificationSetting'];

useUpdateNotificationSettingMutation.fetcher = (variables?: Types.UpdateNotificationSettingMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateNotificationSettingMutation, Types.UpdateNotificationSettingMutationVariables>(UpdateNotificationSettingDocument, variables, options);
export const UpdateOnboardingPartDocument = `
    mutation updateOnboardingPart($description: String, $id: String!, $name: String, $quizId: String, $referenceUrl: String) {
  updateOnboardingPart(
    description: $description
    id: $id
    name: $name
    quizId: $quizId
    referenceUrl: $referenceUrl
  ) {
    companyId
    companyOnboardingId
    confirmationMessage
    description
    failedMessage
    id
    integrationObject
    isEnabled
    name
    pendingMessage
    quizId
    referenceUrl
    workerOnboardingPart {
      id
      integration {
        __typename
        ... on GroupOnboardingPart {
          id
          state
        }
        ... on ProfileOnboarding {
          id
        }
        ... on UserTermsOfService {
          agreedAt
          id
        }
        ... on WorkExperienceOverview {
          discipline
          id
          primarySpecialty
          secondarySpecialty
          yearsOfExperience
        }
        ... on WorkerCertificationOverview {
          id
        }
        ... on WorkerEducationOverview {
          id
        }
        ... on WorkerReferenceOnboarding {
          id
        }
      }
      integrationConfigurations
      integrationObject
      state
      workerId
    }
  }
}
    `;
export const useUpdateOnboardingPartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateOnboardingPartMutation, TError, Types.UpdateOnboardingPartMutationVariables, TContext>) =>
    useMutation<Types.UpdateOnboardingPartMutation, TError, Types.UpdateOnboardingPartMutationVariables, TContext>(
      ['updateOnboardingPart'],
      (variables?: Types.UpdateOnboardingPartMutationVariables) => fetcher<Types.UpdateOnboardingPartMutation, Types.UpdateOnboardingPartMutationVariables>(UpdateOnboardingPartDocument, variables)(),
      options
    );
useUpdateOnboardingPartMutation.getKey = () => ['updateOnboardingPart'];

useUpdateOnboardingPartMutation.fetcher = (variables: Types.UpdateOnboardingPartMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateOnboardingPartMutation, Types.UpdateOnboardingPartMutationVariables>(UpdateOnboardingPartDocument, variables, options);
export const UpdatePrimaryWorkerSpecialtyDocument = `
    mutation updatePrimaryWorkerSpecialty($jobId: String!, $id: String!, $isPrimary: Boolean) {
  updatePrimaryWorkerSpecialty(id: $id, isPrimary: $isPrimary) {
    category
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
    completedChecklist
    id
    isExpired
    isPrimary
    specialty
    specialtyId
    specialtyLongName
    status
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerSkillChecklistSections {
      id
      name
    }
  }
}
    `;
export const useUpdatePrimaryWorkerSpecialtyMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdatePrimaryWorkerSpecialtyMutation, TError, Types.UpdatePrimaryWorkerSpecialtyMutationVariables, TContext>) =>
    useMutation<Types.UpdatePrimaryWorkerSpecialtyMutation, TError, Types.UpdatePrimaryWorkerSpecialtyMutationVariables, TContext>(
      ['updatePrimaryWorkerSpecialty'],
      (variables?: Types.UpdatePrimaryWorkerSpecialtyMutationVariables) => fetcher<Types.UpdatePrimaryWorkerSpecialtyMutation, Types.UpdatePrimaryWorkerSpecialtyMutationVariables>(UpdatePrimaryWorkerSpecialtyDocument, variables)(),
      options
    );
useUpdatePrimaryWorkerSpecialtyMutation.getKey = () => ['updatePrimaryWorkerSpecialty'];

useUpdatePrimaryWorkerSpecialtyMutation.fetcher = (variables: Types.UpdatePrimaryWorkerSpecialtyMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdatePrimaryWorkerSpecialtyMutation, Types.UpdatePrimaryWorkerSpecialtyMutationVariables>(UpdatePrimaryWorkerSpecialtyDocument, variables, options);
export const UpdateSavedFilterDocument = `
    mutation updateSavedFilter($jobId: String!, $filterConditions: JobFilter, $savedFilter: SavedFilterArgument) {
  updateSavedFilter(
    filterConditions: $filterConditions
    savedFilter: $savedFilter
  ) {
    alertChannel
    alertEmail
    alertFirstName
    alertLastName
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
    companyId
    deviceId
    enableAlert
    filterCondition {
      companyId
      disciplines
      exclusiveJob
      externalId
      facilityTypes
      id
      jobTypes
      locationCities
      locationStates
      maxWage
      minMatchingPercentage
      minWage
      nearBy
      shifts
      specialties
      startDate
      workerId
    }
    frequency
    id
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    lastAlertedAt
    name
    pauseAlert
    pauseAlertPeriod
    pauseAlertUntil
    startPauseAlertDate
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerId
  }
}
    `;
export const useUpdateSavedFilterMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateSavedFilterMutation, TError, Types.UpdateSavedFilterMutationVariables, TContext>) =>
    useMutation<Types.UpdateSavedFilterMutation, TError, Types.UpdateSavedFilterMutationVariables, TContext>(
      ['updateSavedFilter'],
      (variables?: Types.UpdateSavedFilterMutationVariables) => fetcher<Types.UpdateSavedFilterMutation, Types.UpdateSavedFilterMutationVariables>(UpdateSavedFilterDocument, variables)(),
      options
    );
useUpdateSavedFilterMutation.getKey = () => ['updateSavedFilter'];

useUpdateSavedFilterMutation.fetcher = (variables: Types.UpdateSavedFilterMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateSavedFilterMutation, Types.UpdateSavedFilterMutationVariables>(UpdateSavedFilterDocument, variables, options);
export const UpdateWorkExperienceDocument = `
    mutation updateWorkExperience($agency: String, $assignmentType: String, $bedsInUnit: Int, $birthsPerMonth: String, $chartingSoftwareUsed: String, $city: String, $country: String, $currentlyEmployed: Boolean, $dailyCensus: Float, $dutiesPerformed: String, $endDate: ISO8601Date, $facilityName: String!, $facilityType: String, $floatSpecialty: String, $id: String, $mayContactSupervisor: Boolean, $numberSuites: Float, $nurseRatio: String, $patientRatio: String, $patientType: String, $position: String, $reasonForLeaving: String, $startDate: ISO8601Date!, $state: String, $supervisor: String, $travelAssignment: Boolean, $unitSpecialty: String, $zipcode: String) {
  updateWorkExperience(
    agency: $agency
    assignmentType: $assignmentType
    bedsInUnit: $bedsInUnit
    birthsPerMonth: $birthsPerMonth
    chartingSoftwareUsed: $chartingSoftwareUsed
    city: $city
    country: $country
    currentlyEmployed: $currentlyEmployed
    dailyCensus: $dailyCensus
    dutiesPerformed: $dutiesPerformed
    endDate: $endDate
    facilityName: $facilityName
    facilityType: $facilityType
    floatSpecialty: $floatSpecialty
    id: $id
    mayContactSupervisor: $mayContactSupervisor
    numberSuites: $numberSuites
    nurseRatio: $nurseRatio
    patientRatio: $patientRatio
    patientType: $patientType
    position: $position
    reasonForLeaving: $reasonForLeaving
    startDate: $startDate
    state: $state
    supervisor: $supervisor
    travelAssignment: $travelAssignment
    unitSpecialty: $unitSpecialty
    zipcode: $zipcode
  ) {
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
}
    `;
export const useUpdateWorkExperienceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateWorkExperienceMutation, TError, Types.UpdateWorkExperienceMutationVariables, TContext>) =>
    useMutation<Types.UpdateWorkExperienceMutation, TError, Types.UpdateWorkExperienceMutationVariables, TContext>(
      ['updateWorkExperience'],
      (variables?: Types.UpdateWorkExperienceMutationVariables) => fetcher<Types.UpdateWorkExperienceMutation, Types.UpdateWorkExperienceMutationVariables>(UpdateWorkExperienceDocument, variables)(),
      options
    );
useUpdateWorkExperienceMutation.getKey = () => ['updateWorkExperience'];

useUpdateWorkExperienceMutation.fetcher = (variables: Types.UpdateWorkExperienceMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateWorkExperienceMutation, Types.UpdateWorkExperienceMutationVariables>(UpdateWorkExperienceDocument, variables, options);
export const UpdateWorkerDocument = `
    mutation updateWorker($size: [String!]!, $jobId: String!, $size1: [String!]!, $agreedToTerms: Boolean, $availableStartDate: ISO8601Date, $avatarImageBase64: String, $avatarImageFileName: String, $dateOfBirth: ISO8601Date, $email: String, $emergencyContactAttributes: EmergencyContactArgument, $facilityTypes: String, $firstName: String, $lastName: String, $noCall: Boolean, $noEmail: Boolean, $noNotification: Boolean, $noSms: Boolean, $password: String, $phone: String, $shiftRequested: [String!], $socialSecurityNumber: String, $timeOffRequested: String, $workerAddressAttributes: WorkerAddressArgument, $workingPreferredLocationsAttributes: [WorkingPreferredLocationArgument!]) {
  updateWorker(
    agreedToTerms: $agreedToTerms
    availableStartDate: $availableStartDate
    avatarImageBase64: $avatarImageBase64
    avatarImageFileName: $avatarImageFileName
    dateOfBirth: $dateOfBirth
    email: $email
    emergencyContactAttributes: $emergencyContactAttributes
    facilityTypes: $facilityTypes
    firstName: $firstName
    lastName: $lastName
    noCall: $noCall
    noEmail: $noEmail
    noNotification: $noNotification
    noSms: $noSms
    password: $password
    phone: $phone
    shiftRequested: $shiftRequested
    socialSecurityNumber: $socialSecurityNumber
    timeOffRequested: $timeOffRequested
    workerAddressAttributes: $workerAddressAttributes
    workingPreferredLocationsAttributes: $workingPreferredLocationsAttributes
  ) {
    agreedToTerms
    availableStartDate
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    avatarUrl
    blocked
    blockedClient {
      note
    }
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
    dateOfBirth
    email
    emergencyContact {
      contactName
      contactPhone
      contactRelationship
      id
      workerId
    }
    employmentType
    facilityTypes
    firstName
    hasActiveAssignment
    id
    isFavorited
    jobCategoriesWorkedNumber
    jobMatchingScore(jobId: $jobId)
    lastName
    lastOtpExpiredAt
    lastSignInAt
    locationsWorkedNumber
    maidenName
    noCall
    noEmail
    noNotification
    noSms
    noTalentMatches
    notificationSetting {
      assignmentEndingReminder
      completeOnboarding
      documentExpired
      id
      interviewInvitationExpired
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
    profilePercentageCompleted
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
    remainingExpirationTime
    resumes {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size1)
      thumbnails
    }
    shiftRequested
    socialSecurityNumber
    supportDocuments {
      documentType
      id
    }
    timeOffRequested
    totalUnreadMessage
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
    workerCertifications {
      certificationType
      compactLicense
      createdAt
      expirationDate
      id
      licenseDiscipline
      licenseNumber
      licenseState
      title
    }
    workerEducations {
      city
      country
      createdAt
      degreeDate
      degreeName
      id
      major
      schoolName
      state
    }
    workerNotes {
      id
      note
      noteType
    }
    workerOnboardings {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
    workerReferences {
      city
      contactEmail
      contactFirstName
      contactFullName
      contactLastName
      contactPhone
      createdAt
      facilityName
      id
      jobTitle
      refType
      relationship
      salutation
      state
      workedFrom
      workedTo
    }
    workerSpecialties {
      category
      completedChecklist
      id
      isExpired
      isPrimary
      specialty
      specialtyId
      specialtyLongName
      status
    }
    workingAuthorization {
      dateOfBirth
      id
      idPhotoUrl
      legalRightToWork
      socialSecurityNumber
      workerId
    }
    workingPreferredLocations {
      id
      preferredWorkingCity
      preferredWorkingState
    }
  }
}
    `;
export const useUpdateWorkerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateWorkerMutation, TError, Types.UpdateWorkerMutationVariables, TContext>) =>
    useMutation<Types.UpdateWorkerMutation, TError, Types.UpdateWorkerMutationVariables, TContext>(
      ['updateWorker'],
      (variables?: Types.UpdateWorkerMutationVariables) => fetcher<Types.UpdateWorkerMutation, Types.UpdateWorkerMutationVariables>(UpdateWorkerDocument, variables)(),
      options
    );
useUpdateWorkerMutation.getKey = () => ['updateWorker'];

useUpdateWorkerMutation.fetcher = (variables: Types.UpdateWorkerMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateWorkerMutation, Types.UpdateWorkerMutationVariables>(UpdateWorkerDocument, variables, options);
export const UpdateWorkerBlockDocument = `
    mutation updateWorkerBlock($jobId: String!, $id: String!, $note: String!) {
  updateWorkerBlock(id: $id, note: $note) {
    blockedLevel
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    clientId
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
    companyId
    createdAt
    employer {
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
    employerId
    id
    note
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerId
  }
}
    `;
export const useUpdateWorkerBlockMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateWorkerBlockMutation, TError, Types.UpdateWorkerBlockMutationVariables, TContext>) =>
    useMutation<Types.UpdateWorkerBlockMutation, TError, Types.UpdateWorkerBlockMutationVariables, TContext>(
      ['updateWorkerBlock'],
      (variables?: Types.UpdateWorkerBlockMutationVariables) => fetcher<Types.UpdateWorkerBlockMutation, Types.UpdateWorkerBlockMutationVariables>(UpdateWorkerBlockDocument, variables)(),
      options
    );
useUpdateWorkerBlockMutation.getKey = () => ['updateWorkerBlock'];

useUpdateWorkerBlockMutation.fetcher = (variables: Types.UpdateWorkerBlockMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateWorkerBlockMutation, Types.UpdateWorkerBlockMutationVariables>(UpdateWorkerBlockDocument, variables, options);
export const UpdateWorkerCertificationDocument = `
    mutation updateWorkerCertification($size: [String!]!, $jobId: String!, $_destroy: Boolean, $certificationType: String!, $compactLicense: Boolean, $expirationDate: ISO8601Date, $id: String, $licenseDiscipline: String, $licenseImages: [FileArgument!], $licenseImagesSignedBlobIds: [String!], $licenseNumber: String, $licenseState: String, $title: String) {
  updateWorkerCertification(
    _destroy: $_destroy
    certificationType: $certificationType
    compactLicense: $compactLicense
    expirationDate: $expirationDate
    id: $id
    licenseDiscipline: $licenseDiscipline
    licenseImages: $licenseImages
    licenseImagesSignedBlobIds: $licenseImagesSignedBlobIds
    licenseNumber: $licenseNumber
    licenseState: $licenseState
    title: $title
  ) {
    certificationType
    compactLicense
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
    createdAt
    expirationDate
    id
    licenseDiscipline
    licenseImages {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    licenseNumber
    licenseState
    title
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useUpdateWorkerCertificationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateWorkerCertificationMutation, TError, Types.UpdateWorkerCertificationMutationVariables, TContext>) =>
    useMutation<Types.UpdateWorkerCertificationMutation, TError, Types.UpdateWorkerCertificationMutationVariables, TContext>(
      ['updateWorkerCertification'],
      (variables?: Types.UpdateWorkerCertificationMutationVariables) => fetcher<Types.UpdateWorkerCertificationMutation, Types.UpdateWorkerCertificationMutationVariables>(UpdateWorkerCertificationDocument, variables)(),
      options
    );
useUpdateWorkerCertificationMutation.getKey = () => ['updateWorkerCertification'];

useUpdateWorkerCertificationMutation.fetcher = (variables: Types.UpdateWorkerCertificationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateWorkerCertificationMutation, Types.UpdateWorkerCertificationMutationVariables>(UpdateWorkerCertificationDocument, variables, options);
export const UpdateWorkerEducationDocument = `
    mutation updateWorkerEducation($jobId: String!, $_destroy: Boolean, $city: String, $country: String, $degreeDate: ISO8601Date, $degreeName: String, $id: String, $major: String, $schoolName: String, $state: String) {
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
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
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
export const UpdateWorkerOnboardingDocument = `
    mutation updateWorkerOnboarding($jobId: String!, $id: String!, $state: String!) {
  updateWorkerOnboarding(id: $id, state: $state) {
    companyOnboardingId
    currentPartIndex
    id
    message
    numOfCompletedSteps
    pendingWorkerOnboardingPart {
      id
      integration {
        __typename
        ... on GroupOnboardingPart {
          id
          state
        }
        ... on ProfileOnboarding {
          id
        }
        ... on UserTermsOfService {
          agreedAt
          id
        }
        ... on WorkExperienceOverview {
          discipline
          id
          primarySpecialty
          secondarySpecialty
          yearsOfExperience
        }
        ... on WorkerCertificationOverview {
          id
        }
        ... on WorkerEducationOverview {
          id
        }
        ... on WorkerReferenceOnboarding {
          id
        }
      }
      integrationConfigurations
      integrationObject
      state
      workerId
    }
    percentageCompleted
    permittedEvents
    state
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useUpdateWorkerOnboardingMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateWorkerOnboardingMutation, TError, Types.UpdateWorkerOnboardingMutationVariables, TContext>) =>
    useMutation<Types.UpdateWorkerOnboardingMutation, TError, Types.UpdateWorkerOnboardingMutationVariables, TContext>(
      ['updateWorkerOnboarding'],
      (variables?: Types.UpdateWorkerOnboardingMutationVariables) => fetcher<Types.UpdateWorkerOnboardingMutation, Types.UpdateWorkerOnboardingMutationVariables>(UpdateWorkerOnboardingDocument, variables)(),
      options
    );
useUpdateWorkerOnboardingMutation.getKey = () => ['updateWorkerOnboarding'];

useUpdateWorkerOnboardingMutation.fetcher = (variables: Types.UpdateWorkerOnboardingMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateWorkerOnboardingMutation, Types.UpdateWorkerOnboardingMutationVariables>(UpdateWorkerOnboardingDocument, variables, options);
export const UpdateWorkerOnboardingPartDocument = `
    mutation updateWorkerOnboardingPart($jobId: String!, $jobId1: String!, $jobId2: String!, $id: String!, $integrationAttributes: JSON) {
  updateWorkerOnboardingPart(
    id: $id
    integrationAttributes: $integrationAttributes
  ) {
    id
    integration {
      __typename
      ... on GroupOnboardingPart {
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
        id
        state
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
      }
      ... on ProfileOnboarding {
        id
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId1)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
      }
      ... on UserTermsOfService {
        agreedAt
        id
        termsOfService {
          id
          url
          version
        }
      }
      ... on WorkExperienceOverview {
        discipline
        id
        primarySpecialty
        secondarySpecialty
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
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId2)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
        yearsOfExperience
      }
      ... on WorkerCertificationOverview {
        id
        workerCertifications {
          certificationType
          compactLicense
          createdAt
          expirationDate
          id
          licenseDiscipline
          licenseNumber
          licenseState
          title
        }
      }
      ... on WorkerEducationOverview {
        id
        workerEducations {
          city
          country
          createdAt
          degreeDate
          degreeName
          id
          major
          schoolName
          state
        }
      }
      ... on WorkerReferenceOnboarding {
        id
        workerReferences {
          city
          contactEmail
          contactFirstName
          contactFullName
          contactLastName
          contactPhone
          createdAt
          facilityName
          id
          jobTitle
          refType
          relationship
          salutation
          state
          workedFrom
          workedTo
        }
      }
    }
    integrationConfigurations
    integrationObject
    onboardingPart {
      companyId
      companyOnboardingId
      confirmationMessage
      description
      failedMessage
      id
      integrationObject
      isEnabled
      name
      pendingMessage
      quizId
      referenceUrl
    }
    state
    workerId
    workerOnboarding {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
  }
}
    `;
export const useUpdateWorkerOnboardingPartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateWorkerOnboardingPartMutation, TError, Types.UpdateWorkerOnboardingPartMutationVariables, TContext>) =>
    useMutation<Types.UpdateWorkerOnboardingPartMutation, TError, Types.UpdateWorkerOnboardingPartMutationVariables, TContext>(
      ['updateWorkerOnboardingPart'],
      (variables?: Types.UpdateWorkerOnboardingPartMutationVariables) => fetcher<Types.UpdateWorkerOnboardingPartMutation, Types.UpdateWorkerOnboardingPartMutationVariables>(UpdateWorkerOnboardingPartDocument, variables)(),
      options
    );
useUpdateWorkerOnboardingPartMutation.getKey = () => ['updateWorkerOnboardingPart'];

useUpdateWorkerOnboardingPartMutation.fetcher = (variables: Types.UpdateWorkerOnboardingPartMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateWorkerOnboardingPartMutation, Types.UpdateWorkerOnboardingPartMutationVariables>(UpdateWorkerOnboardingPartDocument, variables, options);
export const UpdateWorkerReferenceDocument = `
    mutation updateWorkerReference($jobId: String!, $_destroy: Boolean, $city: String, $contactEmail: String!, $contactFirstName: String!, $contactFullName: String, $contactLastName: String!, $contactPhone: String!, $facilityName: String!, $id: String, $jobTitle: String!, $refType: WorkerReferenceTypeEnum!, $relationship: String, $salutation: WorkerReferenceSalutationEnum, $state: String, $workedFrom: ISO8601Date, $workedTo: ISO8601Date) {
  updateWorkerReference(
    _destroy: $_destroy
    city: $city
    contactEmail: $contactEmail
    contactFirstName: $contactFirstName
    contactFullName: $contactFullName
    contactLastName: $contactLastName
    contactPhone: $contactPhone
    facilityName: $facilityName
    id: $id
    jobTitle: $jobTitle
    refType: $refType
    relationship: $relationship
    salutation: $salutation
    state: $state
    workedFrom: $workedFrom
    workedTo: $workedTo
  ) {
    city
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
    contactEmail
    contactFirstName
    contactFullName
    contactLastName
    contactPhone
    createdAt
    facilityName
    id
    jobTitle
    refType
    relationship
    salutation
    state
    workedFrom
    workedTo
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useUpdateWorkerReferenceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateWorkerReferenceMutation, TError, Types.UpdateWorkerReferenceMutationVariables, TContext>) =>
    useMutation<Types.UpdateWorkerReferenceMutation, TError, Types.UpdateWorkerReferenceMutationVariables, TContext>(
      ['updateWorkerReference'],
      (variables?: Types.UpdateWorkerReferenceMutationVariables) => fetcher<Types.UpdateWorkerReferenceMutation, Types.UpdateWorkerReferenceMutationVariables>(UpdateWorkerReferenceDocument, variables)(),
      options
    );
useUpdateWorkerReferenceMutation.getKey = () => ['updateWorkerReference'];

useUpdateWorkerReferenceMutation.fetcher = (variables: Types.UpdateWorkerReferenceMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateWorkerReferenceMutation, Types.UpdateWorkerReferenceMutationVariables>(UpdateWorkerReferenceDocument, variables, options);
export const UpdateWorkingAuthorizationDocument = `
    mutation updateWorkingAuthorization($dateOfBirth: ISO8601Date, $id: String!, $idPhotoBase64: String, $idPhotoFileName: String, $legalRightToWork: Boolean, $socialSecurityNumber: String) {
  updateWorkingAuthorization(
    dateOfBirth: $dateOfBirth
    id: $id
    idPhotoBase64: $idPhotoBase64
    idPhotoFileName: $idPhotoFileName
    legalRightToWork: $legalRightToWork
    socialSecurityNumber: $socialSecurityNumber
  ) {
    dateOfBirth
    id
    idPhotoUrl
    legalRightToWork
    socialSecurityNumber
    workerId
  }
}
    `;
export const useUpdateWorkingAuthorizationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateWorkingAuthorizationMutation, TError, Types.UpdateWorkingAuthorizationMutationVariables, TContext>) =>
    useMutation<Types.UpdateWorkingAuthorizationMutation, TError, Types.UpdateWorkingAuthorizationMutationVariables, TContext>(
      ['updateWorkingAuthorization'],
      (variables?: Types.UpdateWorkingAuthorizationMutationVariables) => fetcher<Types.UpdateWorkingAuthorizationMutation, Types.UpdateWorkingAuthorizationMutationVariables>(UpdateWorkingAuthorizationDocument, variables)(),
      options
    );
useUpdateWorkingAuthorizationMutation.getKey = () => ['updateWorkingAuthorization'];

useUpdateWorkingAuthorizationMutation.fetcher = (variables: Types.UpdateWorkingAuthorizationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateWorkingAuthorizationMutation, Types.UpdateWorkingAuthorizationMutationVariables>(UpdateWorkingAuthorizationDocument, variables, options);
export const UpdateWorkingPreferredLocationsDocument = `
    mutation updateWorkingPreferredLocations($workingPreferredLocationsAttributes: [WorkingPreferredLocationArgument!]) {
  updateWorkingPreferredLocations(
    workingPreferredLocationsAttributes: $workingPreferredLocationsAttributes
  ) {
    id
    preferredWorkingCity
    preferredWorkingState
  }
}
    `;
export const useUpdateWorkingPreferredLocationsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.UpdateWorkingPreferredLocationsMutation, TError, Types.UpdateWorkingPreferredLocationsMutationVariables, TContext>) =>
    useMutation<Types.UpdateWorkingPreferredLocationsMutation, TError, Types.UpdateWorkingPreferredLocationsMutationVariables, TContext>(
      ['updateWorkingPreferredLocations'],
      (variables?: Types.UpdateWorkingPreferredLocationsMutationVariables) => fetcher<Types.UpdateWorkingPreferredLocationsMutation, Types.UpdateWorkingPreferredLocationsMutationVariables>(UpdateWorkingPreferredLocationsDocument, variables)(),
      options
    );
useUpdateWorkingPreferredLocationsMutation.getKey = () => ['updateWorkingPreferredLocations'];

useUpdateWorkingPreferredLocationsMutation.fetcher = (variables?: Types.UpdateWorkingPreferredLocationsMutationVariables, options?: RequestInit['headers']) => fetcher<Types.UpdateWorkingPreferredLocationsMutation, Types.UpdateWorkingPreferredLocationsMutationVariables>(UpdateWorkingPreferredLocationsDocument, variables, options);
export const VerifyClientDocument = `
    mutation verifyClient($id: String!) {
  verifyClient(id: $id) {
    success
  }
}
    `;
export const useVerifyClientMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.VerifyClientMutation, TError, Types.VerifyClientMutationVariables, TContext>) =>
    useMutation<Types.VerifyClientMutation, TError, Types.VerifyClientMutationVariables, TContext>(
      ['verifyClient'],
      (variables?: Types.VerifyClientMutationVariables) => fetcher<Types.VerifyClientMutation, Types.VerifyClientMutationVariables>(VerifyClientDocument, variables)(),
      options
    );
useVerifyClientMutation.getKey = () => ['verifyClient'];

useVerifyClientMutation.fetcher = (variables: Types.VerifyClientMutationVariables, options?: RequestInit['headers']) => fetcher<Types.VerifyClientMutation, Types.VerifyClientMutationVariables>(VerifyClientDocument, variables, options);
export const VerifyExistedEmailDocument = `
    mutation verifyExistedEmail($email: String!, $recaptchaToken: String) {
  verifyExistedEmail(email: $email, recaptchaToken: $recaptchaToken) {
    existed
  }
}
    `;
export const useVerifyExistedEmailMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.VerifyExistedEmailMutation, TError, Types.VerifyExistedEmailMutationVariables, TContext>) =>
    useMutation<Types.VerifyExistedEmailMutation, TError, Types.VerifyExistedEmailMutationVariables, TContext>(
      ['verifyExistedEmail'],
      (variables?: Types.VerifyExistedEmailMutationVariables) => fetcher<Types.VerifyExistedEmailMutation, Types.VerifyExistedEmailMutationVariables>(VerifyExistedEmailDocument, variables)(),
      options
    );
useVerifyExistedEmailMutation.getKey = () => ['verifyExistedEmail'];

useVerifyExistedEmailMutation.fetcher = (variables: Types.VerifyExistedEmailMutationVariables, options?: RequestInit['headers']) => fetcher<Types.VerifyExistedEmailMutation, Types.VerifyExistedEmailMutationVariables>(VerifyExistedEmailDocument, variables, options);
export const VerifyOtpCodeDocument = `
    mutation verifyOtpCode($otpCode: String!, $phoneNumber: String!) {
  verifyOtpCode(otpCode: $otpCode, phoneNumber: $phoneNumber) {
    success
  }
}
    `;
export const useVerifyOtpCodeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.VerifyOtpCodeMutation, TError, Types.VerifyOtpCodeMutationVariables, TContext>) =>
    useMutation<Types.VerifyOtpCodeMutation, TError, Types.VerifyOtpCodeMutationVariables, TContext>(
      ['verifyOtpCode'],
      (variables?: Types.VerifyOtpCodeMutationVariables) => fetcher<Types.VerifyOtpCodeMutation, Types.VerifyOtpCodeMutationVariables>(VerifyOtpCodeDocument, variables)(),
      options
    );
useVerifyOtpCodeMutation.getKey = () => ['verifyOtpCode'];

useVerifyOtpCodeMutation.fetcher = (variables: Types.VerifyOtpCodeMutationVariables, options?: RequestInit['headers']) => fetcher<Types.VerifyOtpCodeMutation, Types.VerifyOtpCodeMutationVariables>(VerifyOtpCodeDocument, variables, options);
export const VerifySocialAuthenticationDocument = `
    mutation verifySocialAuthentication($jobId: String!, $clientId: String!, $clientToken: String, $code: String, $email: String, $providerName: SocialProviderEnum!, $recaptchaToken: String, $redirectUri: String) {
  verifySocialAuthentication(
    clientId: $clientId
    clientToken: $clientToken
    code: $code
    email: $email
    providerName: $providerName
    recaptchaToken: $recaptchaToken
    redirectUri: $redirectUri
  ) {
    authToken
    emailHasAccount
    notificationChannel
    userSocialAuthentication {
      email
      firstName
      id
      lastName
      providerName
      providerUuid
      userId
    }
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useVerifySocialAuthenticationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.VerifySocialAuthenticationMutation, TError, Types.VerifySocialAuthenticationMutationVariables, TContext>) =>
    useMutation<Types.VerifySocialAuthenticationMutation, TError, Types.VerifySocialAuthenticationMutationVariables, TContext>(
      ['verifySocialAuthentication'],
      (variables?: Types.VerifySocialAuthenticationMutationVariables) => fetcher<Types.VerifySocialAuthenticationMutation, Types.VerifySocialAuthenticationMutationVariables>(VerifySocialAuthenticationDocument, variables)(),
      options
    );
useVerifySocialAuthenticationMutation.getKey = () => ['verifySocialAuthentication'];

useVerifySocialAuthenticationMutation.fetcher = (variables: Types.VerifySocialAuthenticationMutationVariables, options?: RequestInit['headers']) => fetcher<Types.VerifySocialAuthenticationMutation, Types.VerifySocialAuthenticationMutationVariables>(VerifySocialAuthenticationDocument, variables, options);
export const WorkerProcessInterviewDocument = `
    mutation workerProcessInterview($jobId: String!, $event: String!, $id: String!, $note: String) {
  workerProcessInterview(event: $event, id: $id, note: $note) {
    address1
    address2
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    createdAt
    description
    employerNote
    id
    interviewEndTime
    interviewLink
    interviewStartTime
    interviewType
    interviewers {
      createdAt
      id
      status
      updatedAt
    }
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    note
    state
    status
    statusName
    statusUpdatedAt
    timezone
    title
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    zipCode
  }
}
    `;
export const useWorkerProcessInterviewMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.WorkerProcessInterviewMutation, TError, Types.WorkerProcessInterviewMutationVariables, TContext>) =>
    useMutation<Types.WorkerProcessInterviewMutation, TError, Types.WorkerProcessInterviewMutationVariables, TContext>(
      ['workerProcessInterview'],
      (variables?: Types.WorkerProcessInterviewMutationVariables) => fetcher<Types.WorkerProcessInterviewMutation, Types.WorkerProcessInterviewMutationVariables>(WorkerProcessInterviewDocument, variables)(),
      options
    );
useWorkerProcessInterviewMutation.getKey = () => ['workerProcessInterview'];

useWorkerProcessInterviewMutation.fetcher = (variables: Types.WorkerProcessInterviewMutationVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerProcessInterviewMutation, Types.WorkerProcessInterviewMutationVariables>(WorkerProcessInterviewDocument, variables, options);
export const WorkerRescheduleInterviewDocument = `
    mutation workerRescheduleInterview($jobId: String!, $id: String!, $interviewEndTime: ISO8601DateTime!, $interviewStartTime: ISO8601DateTime!, $note: String, $timezone: String!) {
  workerRescheduleInterview(
    id: $id
    interviewEndTime: $interviewEndTime
    interviewStartTime: $interviewStartTime
    note: $note
    timezone: $timezone
  ) {
    address
    address2
    applicantTimeOffs {
      endDate
      id
      startDate
    }
    applicationProcess
    applyDate
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkerAssignment {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    discipline
    duration
    durationType
    employerNote
    frequency
    id
    interview {
      address1
      address2
      city
      createdAt
      description
      employerNote
      id
      interviewEndTime
      interviewLink
      interviewStartTime
      interviewType
      note
      state
      status
      statusName
      statusUpdatedAt
      timezone
      title
      updateEvents
      updatedAt
      zipCode
    }
    isDirectOffer
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicantActivities {
      createdAt
      id
      owner
      statusChanged
      updatedAt
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    note
    offerDate
    payAmount
    shifts
    source
    specialty
    startDate
    startedStatus
    startedStatusName
    state
    status
    statusName
    statusUpdatedAt
    submittal {
      externalUpdatedAt
      id
      jobId
      status
      submittalDate
      workerId
    }
    timeOffEndDate
    timeOffStartDate
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerAssignments {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    zipcode
  }
}
    `;
export const useWorkerRescheduleInterviewMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<Types.WorkerRescheduleInterviewMutation, TError, Types.WorkerRescheduleInterviewMutationVariables, TContext>) =>
    useMutation<Types.WorkerRescheduleInterviewMutation, TError, Types.WorkerRescheduleInterviewMutationVariables, TContext>(
      ['workerRescheduleInterview'],
      (variables?: Types.WorkerRescheduleInterviewMutationVariables) => fetcher<Types.WorkerRescheduleInterviewMutation, Types.WorkerRescheduleInterviewMutationVariables>(WorkerRescheduleInterviewDocument, variables)(),
      options
    );
useWorkerRescheduleInterviewMutation.getKey = () => ['workerRescheduleInterview'];

useWorkerRescheduleInterviewMutation.fetcher = (variables: Types.WorkerRescheduleInterviewMutationVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerRescheduleInterviewMutation, Types.WorkerRescheduleInterviewMutationVariables>(WorkerRescheduleInterviewDocument, variables, options);
export const ActiveJobsDocument = `
    query activeJobs {
  activeJobs {
    completedJobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    currentJobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    nextJobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
  }
}
    `;
export const useActiveJobsQuery = <
      TData = Types.ActiveJobsQuery,
      TError = unknown
    >(
      variables?: Types.ActiveJobsQueryVariables,
      options?: UseQueryOptions<Types.ActiveJobsQuery, TError, TData>
    ) =>
    useQuery<Types.ActiveJobsQuery, TError, TData>(
      variables === undefined ? ['activeJobs'] : ['activeJobs', variables],
      fetcher<Types.ActiveJobsQuery, Types.ActiveJobsQueryVariables>(ActiveJobsDocument, variables),
      options
    );

useActiveJobsQuery.getKey = (variables?: Types.ActiveJobsQueryVariables) => variables === undefined ? ['activeJobs'] : ['activeJobs', variables];
;

export const useInfiniteActiveJobsQuery = <
      TData = Types.ActiveJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.ActiveJobsQueryVariables,
      variables?: Types.ActiveJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.ActiveJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.ActiveJobsQuery, TError, TData>(
      variables === undefined ? ['activeJobs.infinite'] : ['activeJobs.infinite', variables],
      (metaData) => fetcher<Types.ActiveJobsQuery, Types.ActiveJobsQueryVariables>(ActiveJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteActiveJobsQuery.getKey = (variables?: Types.ActiveJobsQueryVariables) => variables === undefined ? ['activeJobs.infinite'] : ['activeJobs.infinite', variables];
;

useActiveJobsQuery.fetcher = (variables?: Types.ActiveJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.ActiveJobsQuery, Types.ActiveJobsQueryVariables>(ActiveJobsDocument, variables, options);
export const ActiveListWorkerAssignmentsDocument = `
    query activeListWorkerAssignments {
  activeListWorkerAssignments {
    completed {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    current {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    next {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
  }
}
    `;
export const useActiveListWorkerAssignmentsQuery = <
      TData = Types.ActiveListWorkerAssignmentsQuery,
      TError = unknown
    >(
      variables?: Types.ActiveListWorkerAssignmentsQueryVariables,
      options?: UseQueryOptions<Types.ActiveListWorkerAssignmentsQuery, TError, TData>
    ) =>
    useQuery<Types.ActiveListWorkerAssignmentsQuery, TError, TData>(
      variables === undefined ? ['activeListWorkerAssignments'] : ['activeListWorkerAssignments', variables],
      fetcher<Types.ActiveListWorkerAssignmentsQuery, Types.ActiveListWorkerAssignmentsQueryVariables>(ActiveListWorkerAssignmentsDocument, variables),
      options
    );

useActiveListWorkerAssignmentsQuery.getKey = (variables?: Types.ActiveListWorkerAssignmentsQueryVariables) => variables === undefined ? ['activeListWorkerAssignments'] : ['activeListWorkerAssignments', variables];
;

export const useInfiniteActiveListWorkerAssignmentsQuery = <
      TData = Types.ActiveListWorkerAssignmentsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.ActiveListWorkerAssignmentsQueryVariables,
      variables?: Types.ActiveListWorkerAssignmentsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.ActiveListWorkerAssignmentsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.ActiveListWorkerAssignmentsQuery, TError, TData>(
      variables === undefined ? ['activeListWorkerAssignments.infinite'] : ['activeListWorkerAssignments.infinite', variables],
      (metaData) => fetcher<Types.ActiveListWorkerAssignmentsQuery, Types.ActiveListWorkerAssignmentsQueryVariables>(ActiveListWorkerAssignmentsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteActiveListWorkerAssignmentsQuery.getKey = (variables?: Types.ActiveListWorkerAssignmentsQueryVariables) => variables === undefined ? ['activeListWorkerAssignments.infinite'] : ['activeListWorkerAssignments.infinite', variables];
;

useActiveListWorkerAssignmentsQuery.fetcher = (variables?: Types.ActiveListWorkerAssignmentsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.ActiveListWorkerAssignmentsQuery, Types.ActiveListWorkerAssignmentsQueryVariables>(ActiveListWorkerAssignmentsDocument, variables, options);
export const AdminWorkerOnboardingOverviewDocument = `
    query adminWorkerOnboardingOverview($jobId: String!, $workerId: String!) {
  adminWorkerOnboardingOverview(workerId: $workerId) {
    companyOnboarding {
      companyId
      description
      id
      name
      onboardingPartsNumber
      referenceUrl
    }
    completedMessage
    id
    message
    onboardingParts {
      companyId
      companyOnboardingId
      confirmationMessage
      description
      failedMessage
      id
      integrationObject
      isEnabled
      name
      pendingMessage
      quizId
      referenceUrl
    }
    percentageCompleted
    state
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useAdminWorkerOnboardingOverviewQuery = <
      TData = Types.AdminWorkerOnboardingOverviewQuery,
      TError = unknown
    >(
      variables: Types.AdminWorkerOnboardingOverviewQueryVariables,
      options?: UseQueryOptions<Types.AdminWorkerOnboardingOverviewQuery, TError, TData>
    ) =>
    useQuery<Types.AdminWorkerOnboardingOverviewQuery, TError, TData>(
      ['adminWorkerOnboardingOverview', variables],
      fetcher<Types.AdminWorkerOnboardingOverviewQuery, Types.AdminWorkerOnboardingOverviewQueryVariables>(AdminWorkerOnboardingOverviewDocument, variables),
      options
    );

useAdminWorkerOnboardingOverviewQuery.getKey = (variables: Types.AdminWorkerOnboardingOverviewQueryVariables) => ['adminWorkerOnboardingOverview', variables];
;

export const useInfiniteAdminWorkerOnboardingOverviewQuery = <
      TData = Types.AdminWorkerOnboardingOverviewQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.AdminWorkerOnboardingOverviewQueryVariables,
      variables: Types.AdminWorkerOnboardingOverviewQueryVariables,
      options?: UseInfiniteQueryOptions<Types.AdminWorkerOnboardingOverviewQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.AdminWorkerOnboardingOverviewQuery, TError, TData>(
      ['adminWorkerOnboardingOverview.infinite', variables],
      (metaData) => fetcher<Types.AdminWorkerOnboardingOverviewQuery, Types.AdminWorkerOnboardingOverviewQueryVariables>(AdminWorkerOnboardingOverviewDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteAdminWorkerOnboardingOverviewQuery.getKey = (variables: Types.AdminWorkerOnboardingOverviewQueryVariables) => ['adminWorkerOnboardingOverview.infinite', variables];
;

useAdminWorkerOnboardingOverviewQuery.fetcher = (variables: Types.AdminWorkerOnboardingOverviewQueryVariables, options?: RequestInit['headers']) => fetcher<Types.AdminWorkerOnboardingOverviewQuery, Types.AdminWorkerOnboardingOverviewQueryVariables>(AdminWorkerOnboardingOverviewDocument, variables, options);
export const AllowDismissedBulletinsDocument = `
    query allowDismissedBulletins {
  allowDismissedBulletins {
    active
    allowDismiss
    companyId
    content
    createdAt
    data
    expiredAt
    id
    isDismissed
    kind
    mediaUrl
    name
    scope
    targetedClass
    title
  }
}
    `;
export const useAllowDismissedBulletinsQuery = <
      TData = Types.AllowDismissedBulletinsQuery,
      TError = unknown
    >(
      variables?: Types.AllowDismissedBulletinsQueryVariables,
      options?: UseQueryOptions<Types.AllowDismissedBulletinsQuery, TError, TData>
    ) =>
    useQuery<Types.AllowDismissedBulletinsQuery, TError, TData>(
      variables === undefined ? ['allowDismissedBulletins'] : ['allowDismissedBulletins', variables],
      fetcher<Types.AllowDismissedBulletinsQuery, Types.AllowDismissedBulletinsQueryVariables>(AllowDismissedBulletinsDocument, variables),
      options
    );

useAllowDismissedBulletinsQuery.getKey = (variables?: Types.AllowDismissedBulletinsQueryVariables) => variables === undefined ? ['allowDismissedBulletins'] : ['allowDismissedBulletins', variables];
;

export const useInfiniteAllowDismissedBulletinsQuery = <
      TData = Types.AllowDismissedBulletinsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.AllowDismissedBulletinsQueryVariables,
      variables?: Types.AllowDismissedBulletinsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.AllowDismissedBulletinsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.AllowDismissedBulletinsQuery, TError, TData>(
      variables === undefined ? ['allowDismissedBulletins.infinite'] : ['allowDismissedBulletins.infinite', variables],
      (metaData) => fetcher<Types.AllowDismissedBulletinsQuery, Types.AllowDismissedBulletinsQueryVariables>(AllowDismissedBulletinsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteAllowDismissedBulletinsQuery.getKey = (variables?: Types.AllowDismissedBulletinsQueryVariables) => variables === undefined ? ['allowDismissedBulletins.infinite'] : ['allowDismissedBulletins.infinite', variables];
;

useAllowDismissedBulletinsQuery.fetcher = (variables?: Types.AllowDismissedBulletinsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.AllowDismissedBulletinsQuery, Types.AllowDismissedBulletinsQueryVariables>(AllowDismissedBulletinsDocument, variables, options);
export const AppInitDocument = `
    query appInit($jobId: String!, $workerId: String) {
  appInit(workerId: $workerId) {
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
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerOnboarding {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
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
      variables: Types.AppInitQueryVariables,
      options?: UseQueryOptions<Types.AppInitQuery, TError, TData>
    ) =>
    useQuery<Types.AppInitQuery, TError, TData>(
      ['appInit', variables],
      fetcher<Types.AppInitQuery, Types.AppInitQueryVariables>(AppInitDocument, variables),
      options
    );

useAppInitQuery.getKey = (variables: Types.AppInitQueryVariables) => ['appInit', variables];
;

export const useInfiniteAppInitQuery = <
      TData = Types.AppInitQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.AppInitQueryVariables,
      variables: Types.AppInitQueryVariables,
      options?: UseInfiniteQueryOptions<Types.AppInitQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.AppInitQuery, TError, TData>(
      ['appInit.infinite', variables],
      (metaData) => fetcher<Types.AppInitQuery, Types.AppInitQueryVariables>(AppInitDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteAppInitQuery.getKey = (variables: Types.AppInitQueryVariables) => ['appInit.infinite', variables];
;

useAppInitQuery.fetcher = (variables: Types.AppInitQueryVariables, options?: RequestInit['headers']) => fetcher<Types.AppInitQuery, Types.AppInitQueryVariables>(AppInitDocument, variables, options);
export const AppWalkthroughsDocument = `
    query appWalkthroughs {
  appWalkthroughs {
    completed
    components {
      completed
      description
      id
      target
      title
    }
    id
    name
    webUrl
  }
}
    `;
export const useAppWalkthroughsQuery = <
      TData = Types.AppWalkthroughsQuery,
      TError = unknown
    >(
      variables?: Types.AppWalkthroughsQueryVariables,
      options?: UseQueryOptions<Types.AppWalkthroughsQuery, TError, TData>
    ) =>
    useQuery<Types.AppWalkthroughsQuery, TError, TData>(
      variables === undefined ? ['appWalkthroughs'] : ['appWalkthroughs', variables],
      fetcher<Types.AppWalkthroughsQuery, Types.AppWalkthroughsQueryVariables>(AppWalkthroughsDocument, variables),
      options
    );

useAppWalkthroughsQuery.getKey = (variables?: Types.AppWalkthroughsQueryVariables) => variables === undefined ? ['appWalkthroughs'] : ['appWalkthroughs', variables];
;

export const useInfiniteAppWalkthroughsQuery = <
      TData = Types.AppWalkthroughsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.AppWalkthroughsQueryVariables,
      variables?: Types.AppWalkthroughsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.AppWalkthroughsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.AppWalkthroughsQuery, TError, TData>(
      variables === undefined ? ['appWalkthroughs.infinite'] : ['appWalkthroughs.infinite', variables],
      (metaData) => fetcher<Types.AppWalkthroughsQuery, Types.AppWalkthroughsQueryVariables>(AppWalkthroughsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteAppWalkthroughsQuery.getKey = (variables?: Types.AppWalkthroughsQueryVariables) => variables === undefined ? ['appWalkthroughs.infinite'] : ['appWalkthroughs.infinite', variables];
;

useAppWalkthroughsQuery.fetcher = (variables?: Types.AppWalkthroughsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.AppWalkthroughsQuery, Types.AppWalkthroughsQueryVariables>(AppWalkthroughsDocument, variables, options);
export const AppliedJobsDocument = `
    query appliedJobs($jobId: String!, $filter: JobApplicantStatusEnum, $limit: Int, $offset: Int) {
  appliedJobs(filter: $filter, limit: $limit, offset: $offset) {
    address
    address2
    applicantTimeOffs {
      endDate
      id
      startDate
    }
    applicationProcess
    applyDate
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkerAssignment {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    discipline
    duration
    durationType
    employerNote
    frequency
    id
    interview {
      address1
      address2
      city
      createdAt
      description
      employerNote
      id
      interviewEndTime
      interviewLink
      interviewStartTime
      interviewType
      note
      state
      status
      statusName
      statusUpdatedAt
      timezone
      title
      updateEvents
      updatedAt
      zipCode
    }
    isDirectOffer
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicantActivities {
      createdAt
      id
      owner
      statusChanged
      updatedAt
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    note
    offerDate
    payAmount
    shifts
    source
    specialty
    startDate
    startedStatus
    startedStatusName
    state
    status
    statusName
    statusUpdatedAt
    submittal {
      externalUpdatedAt
      id
      jobId
      status
      submittalDate
      workerId
    }
    timeOffEndDate
    timeOffStartDate
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerAssignments {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    zipcode
  }
}
    `;
export const useAppliedJobsQuery = <
      TData = Types.AppliedJobsQuery,
      TError = unknown
    >(
      variables: Types.AppliedJobsQueryVariables,
      options?: UseQueryOptions<Types.AppliedJobsQuery, TError, TData>
    ) =>
    useQuery<Types.AppliedJobsQuery, TError, TData>(
      ['appliedJobs', variables],
      fetcher<Types.AppliedJobsQuery, Types.AppliedJobsQueryVariables>(AppliedJobsDocument, variables),
      options
    );

useAppliedJobsQuery.getKey = (variables: Types.AppliedJobsQueryVariables) => ['appliedJobs', variables];
;

export const useInfiniteAppliedJobsQuery = <
      TData = Types.AppliedJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.AppliedJobsQueryVariables,
      variables: Types.AppliedJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.AppliedJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.AppliedJobsQuery, TError, TData>(
      ['appliedJobs.infinite', variables],
      (metaData) => fetcher<Types.AppliedJobsQuery, Types.AppliedJobsQueryVariables>(AppliedJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteAppliedJobsQuery.getKey = (variables: Types.AppliedJobsQueryVariables) => ['appliedJobs.infinite', variables];
;

useAppliedJobsQuery.fetcher = (variables: Types.AppliedJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.AppliedJobsQuery, Types.AppliedJobsQueryVariables>(AppliedJobsDocument, variables, options);
export const BillingPlansDocument = `
    query billingPlans {
  billingPlans {
    active
    billingPrices {
      active
      amount
      currency
      id
      interval
      intervalCount
      isDefault
    }
    description
    id
    imageUrl
    isFree
    name
  }
}
    `;
export const useBillingPlansQuery = <
      TData = Types.BillingPlansQuery,
      TError = unknown
    >(
      variables?: Types.BillingPlansQueryVariables,
      options?: UseQueryOptions<Types.BillingPlansQuery, TError, TData>
    ) =>
    useQuery<Types.BillingPlansQuery, TError, TData>(
      variables === undefined ? ['billingPlans'] : ['billingPlans', variables],
      fetcher<Types.BillingPlansQuery, Types.BillingPlansQueryVariables>(BillingPlansDocument, variables),
      options
    );

useBillingPlansQuery.getKey = (variables?: Types.BillingPlansQueryVariables) => variables === undefined ? ['billingPlans'] : ['billingPlans', variables];
;

export const useInfiniteBillingPlansQuery = <
      TData = Types.BillingPlansQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.BillingPlansQueryVariables,
      variables?: Types.BillingPlansQueryVariables,
      options?: UseInfiniteQueryOptions<Types.BillingPlansQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.BillingPlansQuery, TError, TData>(
      variables === undefined ? ['billingPlans.infinite'] : ['billingPlans.infinite', variables],
      (metaData) => fetcher<Types.BillingPlansQuery, Types.BillingPlansQueryVariables>(BillingPlansDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteBillingPlansQuery.getKey = (variables?: Types.BillingPlansQueryVariables) => variables === undefined ? ['billingPlans.infinite'] : ['billingPlans.infinite', variables];
;

useBillingPlansQuery.fetcher = (variables?: Types.BillingPlansQueryVariables, options?: RequestInit['headers']) => fetcher<Types.BillingPlansQuery, Types.BillingPlansQueryVariables>(BillingPlansDocument, variables, options);
export const BillingSubscriptionsDocument = `
    query billingSubscriptions($after: String, $before: String, $clientName: String, $first: Int, $last: Int) {
  billingSubscriptions(
    after: $after
    before: $before
    clientName: $clientName
    first: $first
    last: $last
  ) {
    edges {
      cursor
    }
    nodes {
      description
      id
      latestPaymentStatus
      nextPaymentAt
      paymentMethodType
      status
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useBillingSubscriptionsQuery = <
      TData = Types.BillingSubscriptionsQuery,
      TError = unknown
    >(
      variables?: Types.BillingSubscriptionsQueryVariables,
      options?: UseQueryOptions<Types.BillingSubscriptionsQuery, TError, TData>
    ) =>
    useQuery<Types.BillingSubscriptionsQuery, TError, TData>(
      variables === undefined ? ['billingSubscriptions'] : ['billingSubscriptions', variables],
      fetcher<Types.BillingSubscriptionsQuery, Types.BillingSubscriptionsQueryVariables>(BillingSubscriptionsDocument, variables),
      options
    );

useBillingSubscriptionsQuery.getKey = (variables?: Types.BillingSubscriptionsQueryVariables) => variables === undefined ? ['billingSubscriptions'] : ['billingSubscriptions', variables];
;

export const useInfiniteBillingSubscriptionsQuery = <
      TData = Types.BillingSubscriptionsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.BillingSubscriptionsQueryVariables,
      variables?: Types.BillingSubscriptionsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.BillingSubscriptionsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.BillingSubscriptionsQuery, TError, TData>(
      variables === undefined ? ['billingSubscriptions.infinite'] : ['billingSubscriptions.infinite', variables],
      (metaData) => fetcher<Types.BillingSubscriptionsQuery, Types.BillingSubscriptionsQueryVariables>(BillingSubscriptionsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteBillingSubscriptionsQuery.getKey = (variables?: Types.BillingSubscriptionsQueryVariables) => variables === undefined ? ['billingSubscriptions.infinite'] : ['billingSubscriptions.infinite', variables];
;

useBillingSubscriptionsQuery.fetcher = (variables?: Types.BillingSubscriptionsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.BillingSubscriptionsQuery, Types.BillingSubscriptionsQueryVariables>(BillingSubscriptionsDocument, variables, options);
export const BookmarkedJobsDocument = `
    query bookmarkedJobs($after: String, $before: String, $first: Int, $last: Int) {
  bookmarkedJobs(after: $after, before: $before, first: $first, last: $last) {
    edges {
      cursor
    }
    nodes {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useBookmarkedJobsQuery = <
      TData = Types.BookmarkedJobsQuery,
      TError = unknown
    >(
      variables?: Types.BookmarkedJobsQueryVariables,
      options?: UseQueryOptions<Types.BookmarkedJobsQuery, TError, TData>
    ) =>
    useQuery<Types.BookmarkedJobsQuery, TError, TData>(
      variables === undefined ? ['bookmarkedJobs'] : ['bookmarkedJobs', variables],
      fetcher<Types.BookmarkedJobsQuery, Types.BookmarkedJobsQueryVariables>(BookmarkedJobsDocument, variables),
      options
    );

useBookmarkedJobsQuery.getKey = (variables?: Types.BookmarkedJobsQueryVariables) => variables === undefined ? ['bookmarkedJobs'] : ['bookmarkedJobs', variables];
;

export const useInfiniteBookmarkedJobsQuery = <
      TData = Types.BookmarkedJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.BookmarkedJobsQueryVariables,
      variables?: Types.BookmarkedJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.BookmarkedJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.BookmarkedJobsQuery, TError, TData>(
      variables === undefined ? ['bookmarkedJobs.infinite'] : ['bookmarkedJobs.infinite', variables],
      (metaData) => fetcher<Types.BookmarkedJobsQuery, Types.BookmarkedJobsQueryVariables>(BookmarkedJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteBookmarkedJobsQuery.getKey = (variables?: Types.BookmarkedJobsQueryVariables) => variables === undefined ? ['bookmarkedJobs.infinite'] : ['bookmarkedJobs.infinite', variables];
;

useBookmarkedJobsQuery.fetcher = (variables?: Types.BookmarkedJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.BookmarkedJobsQuery, Types.BookmarkedJobsQueryVariables>(BookmarkedJobsDocument, variables, options);
export const BulletinsDocument = `
    query bulletins {
  bulletins {
    active
    allowDismiss
    companyId
    content
    createdAt
    data
    expiredAt
    id
    isDismissed
    kind
    mediaUrl
    name
    scope
    targetedClass
    title
  }
}
    `;
export const useBulletinsQuery = <
      TData = Types.BulletinsQuery,
      TError = unknown
    >(
      variables?: Types.BulletinsQueryVariables,
      options?: UseQueryOptions<Types.BulletinsQuery, TError, TData>
    ) =>
    useQuery<Types.BulletinsQuery, TError, TData>(
      variables === undefined ? ['bulletins'] : ['bulletins', variables],
      fetcher<Types.BulletinsQuery, Types.BulletinsQueryVariables>(BulletinsDocument, variables),
      options
    );

useBulletinsQuery.getKey = (variables?: Types.BulletinsQueryVariables) => variables === undefined ? ['bulletins'] : ['bulletins', variables];
;

export const useInfiniteBulletinsQuery = <
      TData = Types.BulletinsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.BulletinsQueryVariables,
      variables?: Types.BulletinsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.BulletinsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.BulletinsQuery, TError, TData>(
      variables === undefined ? ['bulletins.infinite'] : ['bulletins.infinite', variables],
      (metaData) => fetcher<Types.BulletinsQuery, Types.BulletinsQueryVariables>(BulletinsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteBulletinsQuery.getKey = (variables?: Types.BulletinsQueryVariables) => variables === undefined ? ['bulletins.infinite'] : ['bulletins.infinite', variables];
;

useBulletinsQuery.fetcher = (variables?: Types.BulletinsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.BulletinsQuery, Types.BulletinsQueryVariables>(BulletinsDocument, variables, options);
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
export const ClosedJobsListDocument = `
    query closedJobsList($ids: [String!]!) {
  closedJobsList(ids: $ids) {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    distance
    distanceToCurrentUserSearchLocation
    draftId
    duration
    durationType
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hospital
    hoursPerWeek
    id
    images
    isAsap
    isBookmarked
    isDisliked
    isFavorited
    isLiked
    isSkillChecklist
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    latitude
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    locationImage {
      city
      id
      state
    }
    longitude
    matchingPercentage
    minExpYear
    minWeeklyPayAmount
    noTalentMatches
    profileRequirements
    publishedAt
    requirementNotes
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const useClosedJobsListQuery = <
      TData = Types.ClosedJobsListQuery,
      TError = unknown
    >(
      variables: Types.ClosedJobsListQueryVariables,
      options?: UseQueryOptions<Types.ClosedJobsListQuery, TError, TData>
    ) =>
    useQuery<Types.ClosedJobsListQuery, TError, TData>(
      ['closedJobsList', variables],
      fetcher<Types.ClosedJobsListQuery, Types.ClosedJobsListQueryVariables>(ClosedJobsListDocument, variables),
      options
    );

useClosedJobsListQuery.getKey = (variables: Types.ClosedJobsListQueryVariables) => ['closedJobsList', variables];
;

export const useInfiniteClosedJobsListQuery = <
      TData = Types.ClosedJobsListQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.ClosedJobsListQueryVariables,
      variables: Types.ClosedJobsListQueryVariables,
      options?: UseInfiniteQueryOptions<Types.ClosedJobsListQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.ClosedJobsListQuery, TError, TData>(
      ['closedJobsList.infinite', variables],
      (metaData) => fetcher<Types.ClosedJobsListQuery, Types.ClosedJobsListQueryVariables>(ClosedJobsListDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteClosedJobsListQuery.getKey = (variables: Types.ClosedJobsListQueryVariables) => ['closedJobsList.infinite', variables];
;

useClosedJobsListQuery.fetcher = (variables: Types.ClosedJobsListQueryVariables, options?: RequestInit['headers']) => fetcher<Types.ClosedJobsListQuery, Types.ClosedJobsListQueryVariables>(ClosedJobsListDocument, variables, options);
export const CompanyDocument = `
    query company($jobId: String!, $id: String!) {
  company(id: $id) {
    address
    addressState
    city
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
    country
    description
    id
    logoUrl
    mainContactEmail
    mainContactName
    name
    phone
    workers {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    zip
  }
}
    `;
export const useCompanyQuery = <
      TData = Types.CompanyQuery,
      TError = unknown
    >(
      variables: Types.CompanyQueryVariables,
      options?: UseQueryOptions<Types.CompanyQuery, TError, TData>
    ) =>
    useQuery<Types.CompanyQuery, TError, TData>(
      ['company', variables],
      fetcher<Types.CompanyQuery, Types.CompanyQueryVariables>(CompanyDocument, variables),
      options
    );

useCompanyQuery.getKey = (variables: Types.CompanyQueryVariables) => ['company', variables];
;

export const useInfiniteCompanyQuery = <
      TData = Types.CompanyQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.CompanyQueryVariables,
      variables: Types.CompanyQueryVariables,
      options?: UseInfiniteQueryOptions<Types.CompanyQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.CompanyQuery, TError, TData>(
      ['company.infinite', variables],
      (metaData) => fetcher<Types.CompanyQuery, Types.CompanyQueryVariables>(CompanyDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteCompanyQuery.getKey = (variables: Types.CompanyQueryVariables) => ['company.infinite', variables];
;

useCompanyQuery.fetcher = (variables: Types.CompanyQueryVariables, options?: RequestInit['headers']) => fetcher<Types.CompanyQuery, Types.CompanyQueryVariables>(CompanyDocument, variables, options);
export const CompanyOnboardingDocument = `
    query companyOnboarding($id: String!) {
  companyOnboarding(id: $id) {
    companyId
    description
    id
    name
    onboardingPartsNumber
    referenceUrl
  }
}
    `;
export const useCompanyOnboardingQuery = <
      TData = Types.CompanyOnboardingQuery,
      TError = unknown
    >(
      variables: Types.CompanyOnboardingQueryVariables,
      options?: UseQueryOptions<Types.CompanyOnboardingQuery, TError, TData>
    ) =>
    useQuery<Types.CompanyOnboardingQuery, TError, TData>(
      ['companyOnboarding', variables],
      fetcher<Types.CompanyOnboardingQuery, Types.CompanyOnboardingQueryVariables>(CompanyOnboardingDocument, variables),
      options
    );

useCompanyOnboardingQuery.getKey = (variables: Types.CompanyOnboardingQueryVariables) => ['companyOnboarding', variables];
;

export const useInfiniteCompanyOnboardingQuery = <
      TData = Types.CompanyOnboardingQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.CompanyOnboardingQueryVariables,
      variables: Types.CompanyOnboardingQueryVariables,
      options?: UseInfiniteQueryOptions<Types.CompanyOnboardingQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.CompanyOnboardingQuery, TError, TData>(
      ['companyOnboarding.infinite', variables],
      (metaData) => fetcher<Types.CompanyOnboardingQuery, Types.CompanyOnboardingQueryVariables>(CompanyOnboardingDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteCompanyOnboardingQuery.getKey = (variables: Types.CompanyOnboardingQueryVariables) => ['companyOnboarding.infinite', variables];
;

useCompanyOnboardingQuery.fetcher = (variables: Types.CompanyOnboardingQueryVariables, options?: RequestInit['headers']) => fetcher<Types.CompanyOnboardingQuery, Types.CompanyOnboardingQueryVariables>(CompanyOnboardingDocument, variables, options);
export const CompanyOnboardingsDocument = `
    query companyOnboardings($companyId: String!) {
  companyOnboardings(companyId: $companyId) {
    companyId
    description
    id
    name
    onboardingPartsNumber
    referenceUrl
  }
}
    `;
export const useCompanyOnboardingsQuery = <
      TData = Types.CompanyOnboardingsQuery,
      TError = unknown
    >(
      variables: Types.CompanyOnboardingsQueryVariables,
      options?: UseQueryOptions<Types.CompanyOnboardingsQuery, TError, TData>
    ) =>
    useQuery<Types.CompanyOnboardingsQuery, TError, TData>(
      ['companyOnboardings', variables],
      fetcher<Types.CompanyOnboardingsQuery, Types.CompanyOnboardingsQueryVariables>(CompanyOnboardingsDocument, variables),
      options
    );

useCompanyOnboardingsQuery.getKey = (variables: Types.CompanyOnboardingsQueryVariables) => ['companyOnboardings', variables];
;

export const useInfiniteCompanyOnboardingsQuery = <
      TData = Types.CompanyOnboardingsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.CompanyOnboardingsQueryVariables,
      variables: Types.CompanyOnboardingsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.CompanyOnboardingsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.CompanyOnboardingsQuery, TError, TData>(
      ['companyOnboardings.infinite', variables],
      (metaData) => fetcher<Types.CompanyOnboardingsQuery, Types.CompanyOnboardingsQueryVariables>(CompanyOnboardingsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteCompanyOnboardingsQuery.getKey = (variables: Types.CompanyOnboardingsQueryVariables) => ['companyOnboardings.infinite', variables];
;

useCompanyOnboardingsQuery.fetcher = (variables: Types.CompanyOnboardingsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.CompanyOnboardingsQuery, Types.CompanyOnboardingsQueryVariables>(CompanyOnboardingsDocument, variables, options);
export const CurrentWeekManagementDocument = `
    query currentWeekManagement {
  currentWeekManagement {
    active
    endDate
    id
    startDate
  }
}
    `;
export const useCurrentWeekManagementQuery = <
      TData = Types.CurrentWeekManagementQuery,
      TError = unknown
    >(
      variables?: Types.CurrentWeekManagementQueryVariables,
      options?: UseQueryOptions<Types.CurrentWeekManagementQuery, TError, TData>
    ) =>
    useQuery<Types.CurrentWeekManagementQuery, TError, TData>(
      variables === undefined ? ['currentWeekManagement'] : ['currentWeekManagement', variables],
      fetcher<Types.CurrentWeekManagementQuery, Types.CurrentWeekManagementQueryVariables>(CurrentWeekManagementDocument, variables),
      options
    );

useCurrentWeekManagementQuery.getKey = (variables?: Types.CurrentWeekManagementQueryVariables) => variables === undefined ? ['currentWeekManagement'] : ['currentWeekManagement', variables];
;

export const useInfiniteCurrentWeekManagementQuery = <
      TData = Types.CurrentWeekManagementQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.CurrentWeekManagementQueryVariables,
      variables?: Types.CurrentWeekManagementQueryVariables,
      options?: UseInfiniteQueryOptions<Types.CurrentWeekManagementQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.CurrentWeekManagementQuery, TError, TData>(
      variables === undefined ? ['currentWeekManagement.infinite'] : ['currentWeekManagement.infinite', variables],
      (metaData) => fetcher<Types.CurrentWeekManagementQuery, Types.CurrentWeekManagementQueryVariables>(CurrentWeekManagementDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteCurrentWeekManagementQuery.getKey = (variables?: Types.CurrentWeekManagementQueryVariables) => variables === undefined ? ['currentWeekManagement.infinite'] : ['currentWeekManagement.infinite', variables];
;

useCurrentWeekManagementQuery.fetcher = (variables?: Types.CurrentWeekManagementQueryVariables, options?: RequestInit['headers']) => fetcher<Types.CurrentWeekManagementQuery, Types.CurrentWeekManagementQueryVariables>(CurrentWeekManagementDocument, variables, options);
export const CurrentWorkerAssignmentDocument = `
    query currentWorkerAssignment($jobId: String!) {
  currentWorkerAssignment {
    address
    address2
    availableToExtend
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkWeek {
      active
      endDate
      id
      startDate
    }
    discipline
    duration
    durationType
    endDate
    frequency
    id
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    payAmount
    previousWorkWeek {
      active
      endDate
      id
      startDate
    }
    shifts
    specialty
    startDate
    state
    status
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    zipcode
  }
}
    `;
export const useCurrentWorkerAssignmentQuery = <
      TData = Types.CurrentWorkerAssignmentQuery,
      TError = unknown
    >(
      variables: Types.CurrentWorkerAssignmentQueryVariables,
      options?: UseQueryOptions<Types.CurrentWorkerAssignmentQuery, TError, TData>
    ) =>
    useQuery<Types.CurrentWorkerAssignmentQuery, TError, TData>(
      ['currentWorkerAssignment', variables],
      fetcher<Types.CurrentWorkerAssignmentQuery, Types.CurrentWorkerAssignmentQueryVariables>(CurrentWorkerAssignmentDocument, variables),
      options
    );

useCurrentWorkerAssignmentQuery.getKey = (variables: Types.CurrentWorkerAssignmentQueryVariables) => ['currentWorkerAssignment', variables];
;

export const useInfiniteCurrentWorkerAssignmentQuery = <
      TData = Types.CurrentWorkerAssignmentQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.CurrentWorkerAssignmentQueryVariables,
      variables: Types.CurrentWorkerAssignmentQueryVariables,
      options?: UseInfiniteQueryOptions<Types.CurrentWorkerAssignmentQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.CurrentWorkerAssignmentQuery, TError, TData>(
      ['currentWorkerAssignment.infinite', variables],
      (metaData) => fetcher<Types.CurrentWorkerAssignmentQuery, Types.CurrentWorkerAssignmentQueryVariables>(CurrentWorkerAssignmentDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteCurrentWorkerAssignmentQuery.getKey = (variables: Types.CurrentWorkerAssignmentQueryVariables) => ['currentWorkerAssignment.infinite', variables];
;

useCurrentWorkerAssignmentQuery.fetcher = (variables: Types.CurrentWorkerAssignmentQueryVariables, options?: RequestInit['headers']) => fetcher<Types.CurrentWorkerAssignmentQuery, Types.CurrentWorkerAssignmentQueryVariables>(CurrentWorkerAssignmentDocument, variables, options);
export const DetailEmployerDocument = `
    query detailEmployer($size: [String!]!, $id: String!) {
  detailEmployer(id: $id) {
    agreedToTerms
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    changePasswordRequired
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    email
    firstName
    id
    intervieweesNumber
    lastName
    lastSignInAt
    paymentMethod
    permittedEvents
    phone
    scope
    scopesAreAllowedToUpdate
    status
    title
    totalUnreadMessage
  }
}
    `;
export const useDetailEmployerQuery = <
      TData = Types.DetailEmployerQuery,
      TError = unknown
    >(
      variables: Types.DetailEmployerQueryVariables,
      options?: UseQueryOptions<Types.DetailEmployerQuery, TError, TData>
    ) =>
    useQuery<Types.DetailEmployerQuery, TError, TData>(
      ['detailEmployer', variables],
      fetcher<Types.DetailEmployerQuery, Types.DetailEmployerQueryVariables>(DetailEmployerDocument, variables),
      options
    );

useDetailEmployerQuery.getKey = (variables: Types.DetailEmployerQueryVariables) => ['detailEmployer', variables];
;

export const useInfiniteDetailEmployerQuery = <
      TData = Types.DetailEmployerQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.DetailEmployerQueryVariables,
      variables: Types.DetailEmployerQueryVariables,
      options?: UseInfiniteQueryOptions<Types.DetailEmployerQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.DetailEmployerQuery, TError, TData>(
      ['detailEmployer.infinite', variables],
      (metaData) => fetcher<Types.DetailEmployerQuery, Types.DetailEmployerQueryVariables>(DetailEmployerDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteDetailEmployerQuery.getKey = (variables: Types.DetailEmployerQueryVariables) => ['detailEmployer.infinite', variables];
;

useDetailEmployerQuery.fetcher = (variables: Types.DetailEmployerQueryVariables, options?: RequestInit['headers']) => fetcher<Types.DetailEmployerQuery, Types.DetailEmployerQueryVariables>(DetailEmployerDocument, variables, options);
export const DiscoversDocument = `
    query discovers {
  discovers {
    available
    bookmarkedJobs
    favoritedJobs
    lastSearch {
      count
      filterConditions
      type
    }
    lastViewedJobs
    recommend
    trending
  }
}
    `;
export const useDiscoversQuery = <
      TData = Types.DiscoversQuery,
      TError = unknown
    >(
      variables?: Types.DiscoversQueryVariables,
      options?: UseQueryOptions<Types.DiscoversQuery, TError, TData>
    ) =>
    useQuery<Types.DiscoversQuery, TError, TData>(
      variables === undefined ? ['discovers'] : ['discovers', variables],
      fetcher<Types.DiscoversQuery, Types.DiscoversQueryVariables>(DiscoversDocument, variables),
      options
    );

useDiscoversQuery.getKey = (variables?: Types.DiscoversQueryVariables) => variables === undefined ? ['discovers'] : ['discovers', variables];
;

export const useInfiniteDiscoversQuery = <
      TData = Types.DiscoversQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.DiscoversQueryVariables,
      variables?: Types.DiscoversQueryVariables,
      options?: UseInfiniteQueryOptions<Types.DiscoversQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.DiscoversQuery, TError, TData>(
      variables === undefined ? ['discovers.infinite'] : ['discovers.infinite', variables],
      (metaData) => fetcher<Types.DiscoversQuery, Types.DiscoversQueryVariables>(DiscoversDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteDiscoversQuery.getKey = (variables?: Types.DiscoversQueryVariables) => variables === undefined ? ['discovers.infinite'] : ['discovers.infinite', variables];
;

useDiscoversQuery.fetcher = (variables?: Types.DiscoversQueryVariables, options?: RequestInit['headers']) => fetcher<Types.DiscoversQuery, Types.DiscoversQueryVariables>(DiscoversDocument, variables, options);
export const DownloadTemplateDocument = `
    query downloadTemplate($objectType: ImportBatchObjectEnum!) {
  downloadTemplate(objectType: $objectType) {
    fileUrl
  }
}
    `;
export const useDownloadTemplateQuery = <
      TData = Types.DownloadTemplateQuery,
      TError = unknown
    >(
      variables: Types.DownloadTemplateQueryVariables,
      options?: UseQueryOptions<Types.DownloadTemplateQuery, TError, TData>
    ) =>
    useQuery<Types.DownloadTemplateQuery, TError, TData>(
      ['downloadTemplate', variables],
      fetcher<Types.DownloadTemplateQuery, Types.DownloadTemplateQueryVariables>(DownloadTemplateDocument, variables),
      options
    );

useDownloadTemplateQuery.getKey = (variables: Types.DownloadTemplateQueryVariables) => ['downloadTemplate', variables];
;

export const useInfiniteDownloadTemplateQuery = <
      TData = Types.DownloadTemplateQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.DownloadTemplateQueryVariables,
      variables: Types.DownloadTemplateQueryVariables,
      options?: UseInfiniteQueryOptions<Types.DownloadTemplateQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.DownloadTemplateQuery, TError, TData>(
      ['downloadTemplate.infinite', variables],
      (metaData) => fetcher<Types.DownloadTemplateQuery, Types.DownloadTemplateQueryVariables>(DownloadTemplateDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteDownloadTemplateQuery.getKey = (variables: Types.DownloadTemplateQueryVariables) => ['downloadTemplate.infinite', variables];
;

useDownloadTemplateQuery.fetcher = (variables: Types.DownloadTemplateQueryVariables, options?: RequestInit['headers']) => fetcher<Types.DownloadTemplateQuery, Types.DownloadTemplateQueryVariables>(DownloadTemplateDocument, variables, options);
export const EmployerAppInitDocument = `
    query employerAppInit($clientId: String) {
  employerAppInit(clientId: $clientId) {
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
    dashboard {
      dateRanges
      totalClients
      totalOnboardingSubmissions
      totalPositionsOpen
      totalWorkersPerClient
      totalWorkersWorking
    }
    employer {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    totalUnreadNotification
  }
}
    `;
export const useEmployerAppInitQuery = <
      TData = Types.EmployerAppInitQuery,
      TError = unknown
    >(
      variables?: Types.EmployerAppInitQueryVariables,
      options?: UseQueryOptions<Types.EmployerAppInitQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerAppInitQuery, TError, TData>(
      variables === undefined ? ['employerAppInit'] : ['employerAppInit', variables],
      fetcher<Types.EmployerAppInitQuery, Types.EmployerAppInitQueryVariables>(EmployerAppInitDocument, variables),
      options
    );

useEmployerAppInitQuery.getKey = (variables?: Types.EmployerAppInitQueryVariables) => variables === undefined ? ['employerAppInit'] : ['employerAppInit', variables];
;

export const useInfiniteEmployerAppInitQuery = <
      TData = Types.EmployerAppInitQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerAppInitQueryVariables,
      variables?: Types.EmployerAppInitQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerAppInitQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerAppInitQuery, TError, TData>(
      variables === undefined ? ['employerAppInit.infinite'] : ['employerAppInit.infinite', variables],
      (metaData) => fetcher<Types.EmployerAppInitQuery, Types.EmployerAppInitQueryVariables>(EmployerAppInitDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerAppInitQuery.getKey = (variables?: Types.EmployerAppInitQueryVariables) => variables === undefined ? ['employerAppInit.infinite'] : ['employerAppInit.infinite', variables];
;

useEmployerAppInitQuery.fetcher = (variables?: Types.EmployerAppInitQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerAppInitQuery, Types.EmployerAppInitQueryVariables>(EmployerAppInitDocument, variables, options);
export const EmployerDetailClientDocument = `
    query employerDetailClient($size: [String!]!, $id: String!) {
  employerDetailClient(id: $id) {
    address1
    address2
    billingPlan {
      active
      description
      id
      imageUrl
      isFree
      name
    }
    city
    contactEmail
    contactFirstName
    contactLastName
    contactName
    contactPhone
    country
    description
    ein
    id
    image {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    latitude
    longitude
    name
    phone
    state
    status
    taxId
    url
    verifiedAt
    verifiedBy {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    verifyStatus
    zipCode
  }
}
    `;
export const useEmployerDetailClientQuery = <
      TData = Types.EmployerDetailClientQuery,
      TError = unknown
    >(
      variables: Types.EmployerDetailClientQueryVariables,
      options?: UseQueryOptions<Types.EmployerDetailClientQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerDetailClientQuery, TError, TData>(
      ['employerDetailClient', variables],
      fetcher<Types.EmployerDetailClientQuery, Types.EmployerDetailClientQueryVariables>(EmployerDetailClientDocument, variables),
      options
    );

useEmployerDetailClientQuery.getKey = (variables: Types.EmployerDetailClientQueryVariables) => ['employerDetailClient', variables];
;

export const useInfiniteEmployerDetailClientQuery = <
      TData = Types.EmployerDetailClientQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerDetailClientQueryVariables,
      variables: Types.EmployerDetailClientQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerDetailClientQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerDetailClientQuery, TError, TData>(
      ['employerDetailClient.infinite', variables],
      (metaData) => fetcher<Types.EmployerDetailClientQuery, Types.EmployerDetailClientQueryVariables>(EmployerDetailClientDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerDetailClientQuery.getKey = (variables: Types.EmployerDetailClientQueryVariables) => ['employerDetailClient.infinite', variables];
;

useEmployerDetailClientQuery.fetcher = (variables: Types.EmployerDetailClientQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerDetailClientQuery, Types.EmployerDetailClientQueryVariables>(EmployerDetailClientDocument, variables, options);
export const EmployerDetailDraftJobDocument = `
    query employerDetailDraftJob($id: String!) {
  employerDetailDraftJob(id: $id) {
    clientId
    data {
      __typename
      ... on Job {
        address
        address2
        applicantCount
        benefitContent
        canApply
        city
        client {
          address1
          address2
          city
          contactEmail
          contactFirstName
          contactLastName
          contactName
          contactPhone
          country
          description
          ein
          id
          latitude
          longitude
          name
          phone
          state
          status
          taxId
          url
          verifiedAt
          verifyStatus
          zipCode
        }
        complianceRequirements
        country
        createdAt
        createdDate
        customStartDate
        description
        discipline
        distance
        distanceToCurrentUserSearchLocation
        draftId
        duration
        durationType
        employerOfRecord
        exclusiveJob
        externalCreatedAt
        externalJobId
        externalUpdatedAt
        facilityType
        favoriteCount
        frequency
        hospital
        hoursPerWeek
        id
        images
        isAsap
        isBookmarked
        isDisliked
        isFavorited
        isLiked
        isSkillChecklist
        jobApplicant {
          address
          address2
          applicationProcess
          applyDate
          city
          country
          createdAt
          discipline
          duration
          durationType
          employerNote
          frequency
          id
          isDirectOffer
          jobTitle
          latitude
          longitude
          minPayAmount
          note
          offerDate
          payAmount
          shifts
          source
          specialty
          startDate
          startedStatus
          startedStatusName
          state
          status
          statusName
          statusUpdatedAt
          timeOffEndDate
          timeOffStartDate
          updateEvents
          updatedAt
          zipcode
        }
        jobApplicants {
          address
          address2
          applicationProcess
          applyDate
          city
          country
          createdAt
          discipline
          duration
          durationType
          employerNote
          frequency
          id
          isDirectOffer
          jobTitle
          latitude
          longitude
          minPayAmount
          note
          offerDate
          payAmount
          shifts
          source
          specialty
          startDate
          startedStatus
          startedStatusName
          state
          status
          statusName
          statusUpdatedAt
          timeOffEndDate
          timeOffStartDate
          updateEvents
          updatedAt
          zipcode
        }
        jobInvitations {
          createdAt
          id
          updatedAt
        }
        jobType
        latitude
        location {
          active
          address
          addressState
          city
          clientId
          companyId
          country
          distanceToCurrentUserSearchLocation
          id
          latitude
          longitude
          name
          phone
          region
          statusUpdatedAt
          zipcode
        }
        locationImage {
          city
          id
          state
        }
        longitude
        matchingPercentage
        minExpYear
        minWeeklyPayAmount
        noTalentMatches
        profileRequirements
        publishedAt
        requirementNotes
        shifts
        skillId
        skillLongName
        skillName
        slotsNumber
        slug
        specialty
        startDate
        state
        status
        templateName
        title
        topWorkerMatchingScores
        updatedAt
        viewCount
        weeklyPayAmount
        zipcode
      }
    }
    id
  }
}
    `;
export const useEmployerDetailDraftJobQuery = <
      TData = Types.EmployerDetailDraftJobQuery,
      TError = unknown
    >(
      variables: Types.EmployerDetailDraftJobQueryVariables,
      options?: UseQueryOptions<Types.EmployerDetailDraftJobQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerDetailDraftJobQuery, TError, TData>(
      ['employerDetailDraftJob', variables],
      fetcher<Types.EmployerDetailDraftJobQuery, Types.EmployerDetailDraftJobQueryVariables>(EmployerDetailDraftJobDocument, variables),
      options
    );

useEmployerDetailDraftJobQuery.getKey = (variables: Types.EmployerDetailDraftJobQueryVariables) => ['employerDetailDraftJob', variables];
;

export const useInfiniteEmployerDetailDraftJobQuery = <
      TData = Types.EmployerDetailDraftJobQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerDetailDraftJobQueryVariables,
      variables: Types.EmployerDetailDraftJobQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerDetailDraftJobQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerDetailDraftJobQuery, TError, TData>(
      ['employerDetailDraftJob.infinite', variables],
      (metaData) => fetcher<Types.EmployerDetailDraftJobQuery, Types.EmployerDetailDraftJobQueryVariables>(EmployerDetailDraftJobDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerDetailDraftJobQuery.getKey = (variables: Types.EmployerDetailDraftJobQueryVariables) => ['employerDetailDraftJob.infinite', variables];
;

useEmployerDetailDraftJobQuery.fetcher = (variables: Types.EmployerDetailDraftJobQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerDetailDraftJobQuery, Types.EmployerDetailDraftJobQueryVariables>(EmployerDetailDraftJobDocument, variables, options);
export const EmployerDetailInterviewDocument = `
    query employerDetailInterview($jobId: String!, $id: String!) {
  employerDetailInterview(id: $id) {
    address1
    address2
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
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
    createdAt
    description
    employerNote
    id
    interviewEndTime
    interviewLink
    interviewStartTime
    interviewType
    interviewers {
      createdAt
      id
      status
      updatedAt
    }
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    note
    state
    status
    statusName
    statusUpdatedAt
    timezone
    title
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    zipCode
  }
}
    `;
export const useEmployerDetailInterviewQuery = <
      TData = Types.EmployerDetailInterviewQuery,
      TError = unknown
    >(
      variables: Types.EmployerDetailInterviewQueryVariables,
      options?: UseQueryOptions<Types.EmployerDetailInterviewQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerDetailInterviewQuery, TError, TData>(
      ['employerDetailInterview', variables],
      fetcher<Types.EmployerDetailInterviewQuery, Types.EmployerDetailInterviewQueryVariables>(EmployerDetailInterviewDocument, variables),
      options
    );

useEmployerDetailInterviewQuery.getKey = (variables: Types.EmployerDetailInterviewQueryVariables) => ['employerDetailInterview', variables];
;

export const useInfiniteEmployerDetailInterviewQuery = <
      TData = Types.EmployerDetailInterviewQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerDetailInterviewQueryVariables,
      variables: Types.EmployerDetailInterviewQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerDetailInterviewQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerDetailInterviewQuery, TError, TData>(
      ['employerDetailInterview.infinite', variables],
      (metaData) => fetcher<Types.EmployerDetailInterviewQuery, Types.EmployerDetailInterviewQueryVariables>(EmployerDetailInterviewDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerDetailInterviewQuery.getKey = (variables: Types.EmployerDetailInterviewQueryVariables) => ['employerDetailInterview.infinite', variables];
;

useEmployerDetailInterviewQuery.fetcher = (variables: Types.EmployerDetailInterviewQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerDetailInterviewQuery, Types.EmployerDetailInterviewQueryVariables>(EmployerDetailInterviewDocument, variables, options);
export const EmployerDetailJobApplicantDocument = `
    query employerDetailJobApplicant($jobId: String!, $id: String!) {
  employerDetailJobApplicant(id: $id) {
    address
    address2
    applicantTimeOffs {
      endDate
      id
      startDate
    }
    applicationProcess
    applyDate
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkerAssignment {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    discipline
    duration
    durationType
    employerNote
    frequency
    id
    interview {
      address1
      address2
      city
      createdAt
      description
      employerNote
      id
      interviewEndTime
      interviewLink
      interviewStartTime
      interviewType
      note
      state
      status
      statusName
      statusUpdatedAt
      timezone
      title
      updateEvents
      updatedAt
      zipCode
    }
    isDirectOffer
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicantActivities {
      createdAt
      id
      owner
      statusChanged
      updatedAt
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    note
    offerDate
    payAmount
    shifts
    source
    specialty
    startDate
    startedStatus
    startedStatusName
    state
    status
    statusName
    statusUpdatedAt
    submittal {
      externalUpdatedAt
      id
      jobId
      status
      submittalDate
      workerId
    }
    timeOffEndDate
    timeOffStartDate
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerAssignments {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    zipcode
  }
}
    `;
export const useEmployerDetailJobApplicantQuery = <
      TData = Types.EmployerDetailJobApplicantQuery,
      TError = unknown
    >(
      variables: Types.EmployerDetailJobApplicantQueryVariables,
      options?: UseQueryOptions<Types.EmployerDetailJobApplicantQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerDetailJobApplicantQuery, TError, TData>(
      ['employerDetailJobApplicant', variables],
      fetcher<Types.EmployerDetailJobApplicantQuery, Types.EmployerDetailJobApplicantQueryVariables>(EmployerDetailJobApplicantDocument, variables),
      options
    );

useEmployerDetailJobApplicantQuery.getKey = (variables: Types.EmployerDetailJobApplicantQueryVariables) => ['employerDetailJobApplicant', variables];
;

export const useInfiniteEmployerDetailJobApplicantQuery = <
      TData = Types.EmployerDetailJobApplicantQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerDetailJobApplicantQueryVariables,
      variables: Types.EmployerDetailJobApplicantQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerDetailJobApplicantQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerDetailJobApplicantQuery, TError, TData>(
      ['employerDetailJobApplicant.infinite', variables],
      (metaData) => fetcher<Types.EmployerDetailJobApplicantQuery, Types.EmployerDetailJobApplicantQueryVariables>(EmployerDetailJobApplicantDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerDetailJobApplicantQuery.getKey = (variables: Types.EmployerDetailJobApplicantQueryVariables) => ['employerDetailJobApplicant.infinite', variables];
;

useEmployerDetailJobApplicantQuery.fetcher = (variables: Types.EmployerDetailJobApplicantQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerDetailJobApplicantQuery, Types.EmployerDetailJobApplicantQueryVariables>(EmployerDetailJobApplicantDocument, variables, options);
export const EmployerDetailJobTemplateDocument = `
    query employerDetailJobTemplate($id: String!) {
  employerDetailJobTemplate(id: $id) {
    clientId
    companyId
    data {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    id
    templateName
  }
}
    `;
export const useEmployerDetailJobTemplateQuery = <
      TData = Types.EmployerDetailJobTemplateQuery,
      TError = unknown
    >(
      variables: Types.EmployerDetailJobTemplateQueryVariables,
      options?: UseQueryOptions<Types.EmployerDetailJobTemplateQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerDetailJobTemplateQuery, TError, TData>(
      ['employerDetailJobTemplate', variables],
      fetcher<Types.EmployerDetailJobTemplateQuery, Types.EmployerDetailJobTemplateQueryVariables>(EmployerDetailJobTemplateDocument, variables),
      options
    );

useEmployerDetailJobTemplateQuery.getKey = (variables: Types.EmployerDetailJobTemplateQueryVariables) => ['employerDetailJobTemplate', variables];
;

export const useInfiniteEmployerDetailJobTemplateQuery = <
      TData = Types.EmployerDetailJobTemplateQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerDetailJobTemplateQueryVariables,
      variables: Types.EmployerDetailJobTemplateQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerDetailJobTemplateQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerDetailJobTemplateQuery, TError, TData>(
      ['employerDetailJobTemplate.infinite', variables],
      (metaData) => fetcher<Types.EmployerDetailJobTemplateQuery, Types.EmployerDetailJobTemplateQueryVariables>(EmployerDetailJobTemplateDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerDetailJobTemplateQuery.getKey = (variables: Types.EmployerDetailJobTemplateQueryVariables) => ['employerDetailJobTemplate.infinite', variables];
;

useEmployerDetailJobTemplateQuery.fetcher = (variables: Types.EmployerDetailJobTemplateQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerDetailJobTemplateQuery, Types.EmployerDetailJobTemplateQueryVariables>(EmployerDetailJobTemplateDocument, variables, options);
export const EmployerDetailLocationDocument = `
    query employerDetailLocation($id: String!) {
  employerDetailLocation(id: $id) {
    active
    address
    addressState
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    clientId
    companyId
    country
    distanceToCurrentUserSearchLocation
    id
    latitude
    longitude
    name
    phone
    region
    statusUpdatedAt
    statusUpdater {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    zipcode
  }
}
    `;
export const useEmployerDetailLocationQuery = <
      TData = Types.EmployerDetailLocationQuery,
      TError = unknown
    >(
      variables: Types.EmployerDetailLocationQueryVariables,
      options?: UseQueryOptions<Types.EmployerDetailLocationQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerDetailLocationQuery, TError, TData>(
      ['employerDetailLocation', variables],
      fetcher<Types.EmployerDetailLocationQuery, Types.EmployerDetailLocationQueryVariables>(EmployerDetailLocationDocument, variables),
      options
    );

useEmployerDetailLocationQuery.getKey = (variables: Types.EmployerDetailLocationQueryVariables) => ['employerDetailLocation', variables];
;

export const useInfiniteEmployerDetailLocationQuery = <
      TData = Types.EmployerDetailLocationQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerDetailLocationQueryVariables,
      variables: Types.EmployerDetailLocationQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerDetailLocationQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerDetailLocationQuery, TError, TData>(
      ['employerDetailLocation.infinite', variables],
      (metaData) => fetcher<Types.EmployerDetailLocationQuery, Types.EmployerDetailLocationQueryVariables>(EmployerDetailLocationDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerDetailLocationQuery.getKey = (variables: Types.EmployerDetailLocationQueryVariables) => ['employerDetailLocation.infinite', variables];
;

useEmployerDetailLocationQuery.fetcher = (variables: Types.EmployerDetailLocationQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerDetailLocationQuery, Types.EmployerDetailLocationQueryVariables>(EmployerDetailLocationDocument, variables, options);
export const EmployerFavoritedWorkersDocument = `
    query employerFavoritedWorkers($jobId: String!, $filter: WorkerFilter, $jobId1: String, $limit: Int, $offset: Int, $sortBy: WorkerManagementSort) {
  employerFavoritedWorkers(
    filter: $filter
    jobId: $jobId1
    limit: $limit
    offset: $offset
    sortBy: $sortBy
  ) {
    totalCount
    workers {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useEmployerFavoritedWorkersQuery = <
      TData = Types.EmployerFavoritedWorkersQuery,
      TError = unknown
    >(
      variables: Types.EmployerFavoritedWorkersQueryVariables,
      options?: UseQueryOptions<Types.EmployerFavoritedWorkersQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerFavoritedWorkersQuery, TError, TData>(
      ['employerFavoritedWorkers', variables],
      fetcher<Types.EmployerFavoritedWorkersQuery, Types.EmployerFavoritedWorkersQueryVariables>(EmployerFavoritedWorkersDocument, variables),
      options
    );

useEmployerFavoritedWorkersQuery.getKey = (variables: Types.EmployerFavoritedWorkersQueryVariables) => ['employerFavoritedWorkers', variables];
;

export const useInfiniteEmployerFavoritedWorkersQuery = <
      TData = Types.EmployerFavoritedWorkersQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerFavoritedWorkersQueryVariables,
      variables: Types.EmployerFavoritedWorkersQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerFavoritedWorkersQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerFavoritedWorkersQuery, TError, TData>(
      ['employerFavoritedWorkers.infinite', variables],
      (metaData) => fetcher<Types.EmployerFavoritedWorkersQuery, Types.EmployerFavoritedWorkersQueryVariables>(EmployerFavoritedWorkersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerFavoritedWorkersQuery.getKey = (variables: Types.EmployerFavoritedWorkersQueryVariables) => ['employerFavoritedWorkers.infinite', variables];
;

useEmployerFavoritedWorkersQuery.fetcher = (variables: Types.EmployerFavoritedWorkersQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerFavoritedWorkersQuery, Types.EmployerFavoritedWorkersQueryVariables>(EmployerFavoritedWorkersDocument, variables, options);
export const EmployerJobMatchesDocument = `
    query employerJobMatches($jobId: String!, $after: String, $before: String, $favorited: Boolean, $first: Int, $jobId1: String!, $last: Int) {
  employerJobMatches(
    after: $after
    before: $before
    favorited: $favorited
    first: $first
    jobId: $jobId1
    last: $last
  ) {
    edges {
      cursor
    }
    nodes {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useEmployerJobMatchesQuery = <
      TData = Types.EmployerJobMatchesQuery,
      TError = unknown
    >(
      variables: Types.EmployerJobMatchesQueryVariables,
      options?: UseQueryOptions<Types.EmployerJobMatchesQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerJobMatchesQuery, TError, TData>(
      ['employerJobMatches', variables],
      fetcher<Types.EmployerJobMatchesQuery, Types.EmployerJobMatchesQueryVariables>(EmployerJobMatchesDocument, variables),
      options
    );

useEmployerJobMatchesQuery.getKey = (variables: Types.EmployerJobMatchesQueryVariables) => ['employerJobMatches', variables];
;

export const useInfiniteEmployerJobMatchesQuery = <
      TData = Types.EmployerJobMatchesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerJobMatchesQueryVariables,
      variables: Types.EmployerJobMatchesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerJobMatchesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerJobMatchesQuery, TError, TData>(
      ['employerJobMatches.infinite', variables],
      (metaData) => fetcher<Types.EmployerJobMatchesQuery, Types.EmployerJobMatchesQueryVariables>(EmployerJobMatchesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerJobMatchesQuery.getKey = (variables: Types.EmployerJobMatchesQueryVariables) => ['employerJobMatches.infinite', variables];
;

useEmployerJobMatchesQuery.fetcher = (variables: Types.EmployerJobMatchesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerJobMatchesQuery, Types.EmployerJobMatchesQueryVariables>(EmployerJobMatchesDocument, variables, options);
export const EmployerJobsByFavoritedWorkerDocument = `
    query employerJobsByFavoritedWorker($filter: JobFilter, $limit: Int, $offset: Int, $sortBy: JobManagementSort) {
  employerJobsByFavoritedWorker(
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
  ) {
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    summary {
      disciplines
    }
    totalCount
  }
}
    `;
export const useEmployerJobsByFavoritedWorkerQuery = <
      TData = Types.EmployerJobsByFavoritedWorkerQuery,
      TError = unknown
    >(
      variables?: Types.EmployerJobsByFavoritedWorkerQueryVariables,
      options?: UseQueryOptions<Types.EmployerJobsByFavoritedWorkerQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerJobsByFavoritedWorkerQuery, TError, TData>(
      variables === undefined ? ['employerJobsByFavoritedWorker'] : ['employerJobsByFavoritedWorker', variables],
      fetcher<Types.EmployerJobsByFavoritedWorkerQuery, Types.EmployerJobsByFavoritedWorkerQueryVariables>(EmployerJobsByFavoritedWorkerDocument, variables),
      options
    );

useEmployerJobsByFavoritedWorkerQuery.getKey = (variables?: Types.EmployerJobsByFavoritedWorkerQueryVariables) => variables === undefined ? ['employerJobsByFavoritedWorker'] : ['employerJobsByFavoritedWorker', variables];
;

export const useInfiniteEmployerJobsByFavoritedWorkerQuery = <
      TData = Types.EmployerJobsByFavoritedWorkerQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerJobsByFavoritedWorkerQueryVariables,
      variables?: Types.EmployerJobsByFavoritedWorkerQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerJobsByFavoritedWorkerQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerJobsByFavoritedWorkerQuery, TError, TData>(
      variables === undefined ? ['employerJobsByFavoritedWorker.infinite'] : ['employerJobsByFavoritedWorker.infinite', variables],
      (metaData) => fetcher<Types.EmployerJobsByFavoritedWorkerQuery, Types.EmployerJobsByFavoritedWorkerQueryVariables>(EmployerJobsByFavoritedWorkerDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerJobsByFavoritedWorkerQuery.getKey = (variables?: Types.EmployerJobsByFavoritedWorkerQueryVariables) => variables === undefined ? ['employerJobsByFavoritedWorker.infinite'] : ['employerJobsByFavoritedWorker.infinite', variables];
;

useEmployerJobsByFavoritedWorkerQuery.fetcher = (variables?: Types.EmployerJobsByFavoritedWorkerQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerJobsByFavoritedWorkerQuery, Types.EmployerJobsByFavoritedWorkerQueryVariables>(EmployerJobsByFavoritedWorkerDocument, variables, options);
export const EmployerListClientsDocument = `
    query employerListClients($after: String, $before: String, $first: Int, $last: Int, $nameContain: String) {
  employerListClients(
    after: $after
    before: $before
    first: $first
    last: $last
    nameContain: $nameContain
  ) {
    edges {
      cursor
    }
    nodes {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useEmployerListClientsQuery = <
      TData = Types.EmployerListClientsQuery,
      TError = unknown
    >(
      variables?: Types.EmployerListClientsQueryVariables,
      options?: UseQueryOptions<Types.EmployerListClientsQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerListClientsQuery, TError, TData>(
      variables === undefined ? ['employerListClients'] : ['employerListClients', variables],
      fetcher<Types.EmployerListClientsQuery, Types.EmployerListClientsQueryVariables>(EmployerListClientsDocument, variables),
      options
    );

useEmployerListClientsQuery.getKey = (variables?: Types.EmployerListClientsQueryVariables) => variables === undefined ? ['employerListClients'] : ['employerListClients', variables];
;

export const useInfiniteEmployerListClientsQuery = <
      TData = Types.EmployerListClientsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerListClientsQueryVariables,
      variables?: Types.EmployerListClientsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerListClientsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerListClientsQuery, TError, TData>(
      variables === undefined ? ['employerListClients.infinite'] : ['employerListClients.infinite', variables],
      (metaData) => fetcher<Types.EmployerListClientsQuery, Types.EmployerListClientsQueryVariables>(EmployerListClientsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerListClientsQuery.getKey = (variables?: Types.EmployerListClientsQueryVariables) => variables === undefined ? ['employerListClients.infinite'] : ['employerListClients.infinite', variables];
;

useEmployerListClientsQuery.fetcher = (variables?: Types.EmployerListClientsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerListClientsQuery, Types.EmployerListClientsQueryVariables>(EmployerListClientsDocument, variables, options);
export const EmployerListContactFormsDocument = `
    query employerListContactForms($after: String, $before: String, $first: Int, $last: Int) {
  employerListContactForms(
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
    }
    nodes {
      contactType
      createdAt
      description
      email
      fullName
      id
      ownerId
      ownerType
      phone
      source
      status
      subject
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useEmployerListContactFormsQuery = <
      TData = Types.EmployerListContactFormsQuery,
      TError = unknown
    >(
      variables?: Types.EmployerListContactFormsQueryVariables,
      options?: UseQueryOptions<Types.EmployerListContactFormsQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerListContactFormsQuery, TError, TData>(
      variables === undefined ? ['employerListContactForms'] : ['employerListContactForms', variables],
      fetcher<Types.EmployerListContactFormsQuery, Types.EmployerListContactFormsQueryVariables>(EmployerListContactFormsDocument, variables),
      options
    );

useEmployerListContactFormsQuery.getKey = (variables?: Types.EmployerListContactFormsQueryVariables) => variables === undefined ? ['employerListContactForms'] : ['employerListContactForms', variables];
;

export const useInfiniteEmployerListContactFormsQuery = <
      TData = Types.EmployerListContactFormsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerListContactFormsQueryVariables,
      variables?: Types.EmployerListContactFormsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerListContactFormsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerListContactFormsQuery, TError, TData>(
      variables === undefined ? ['employerListContactForms.infinite'] : ['employerListContactForms.infinite', variables],
      (metaData) => fetcher<Types.EmployerListContactFormsQuery, Types.EmployerListContactFormsQueryVariables>(EmployerListContactFormsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerListContactFormsQuery.getKey = (variables?: Types.EmployerListContactFormsQueryVariables) => variables === undefined ? ['employerListContactForms.infinite'] : ['employerListContactForms.infinite', variables];
;

useEmployerListContactFormsQuery.fetcher = (variables?: Types.EmployerListContactFormsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerListContactFormsQuery, Types.EmployerListContactFormsQueryVariables>(EmployerListContactFormsDocument, variables, options);
export const EmployerListDraftJobsDocument = `
    query employerListDraftJobs($after: String, $before: String, $first: Int, $last: Int) {
  employerListDraftJobs(
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
    }
    nodes {
      clientId
      data {
        __typename
        ... on Job {
          address
          address2
          applicantCount
          benefitContent
          canApply
          city
          complianceRequirements
          country
          createdAt
          createdDate
          customStartDate
          description
          discipline
          distance
          distanceToCurrentUserSearchLocation
          draftId
          duration
          durationType
          employerOfRecord
          exclusiveJob
          externalCreatedAt
          externalJobId
          externalUpdatedAt
          facilityType
          favoriteCount
          frequency
          hospital
          hoursPerWeek
          id
          images
          isAsap
          isBookmarked
          isDisliked
          isFavorited
          isLiked
          isSkillChecklist
          jobType
          latitude
          longitude
          matchingPercentage
          minExpYear
          minWeeklyPayAmount
          noTalentMatches
          profileRequirements
          publishedAt
          requirementNotes
          shifts
          skillId
          skillLongName
          skillName
          slotsNumber
          slug
          specialty
          startDate
          state
          status
          templateName
          title
          topWorkerMatchingScores
          updatedAt
          viewCount
          weeklyPayAmount
          zipcode
        }
      }
      id
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useEmployerListDraftJobsQuery = <
      TData = Types.EmployerListDraftJobsQuery,
      TError = unknown
    >(
      variables?: Types.EmployerListDraftJobsQueryVariables,
      options?: UseQueryOptions<Types.EmployerListDraftJobsQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerListDraftJobsQuery, TError, TData>(
      variables === undefined ? ['employerListDraftJobs'] : ['employerListDraftJobs', variables],
      fetcher<Types.EmployerListDraftJobsQuery, Types.EmployerListDraftJobsQueryVariables>(EmployerListDraftJobsDocument, variables),
      options
    );

useEmployerListDraftJobsQuery.getKey = (variables?: Types.EmployerListDraftJobsQueryVariables) => variables === undefined ? ['employerListDraftJobs'] : ['employerListDraftJobs', variables];
;

export const useInfiniteEmployerListDraftJobsQuery = <
      TData = Types.EmployerListDraftJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerListDraftJobsQueryVariables,
      variables?: Types.EmployerListDraftJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerListDraftJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerListDraftJobsQuery, TError, TData>(
      variables === undefined ? ['employerListDraftJobs.infinite'] : ['employerListDraftJobs.infinite', variables],
      (metaData) => fetcher<Types.EmployerListDraftJobsQuery, Types.EmployerListDraftJobsQueryVariables>(EmployerListDraftJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerListDraftJobsQuery.getKey = (variables?: Types.EmployerListDraftJobsQueryVariables) => variables === undefined ? ['employerListDraftJobs.infinite'] : ['employerListDraftJobs.infinite', variables];
;

useEmployerListDraftJobsQuery.fetcher = (variables?: Types.EmployerListDraftJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerListDraftJobsQuery, Types.EmployerListDraftJobsQueryVariables>(EmployerListDraftJobsDocument, variables, options);
export const EmployerListInterviewsDocument = `
    query employerListInterviews($filter: JobApplicantFilter, $limit: Int, $offset: Int, $sortBy: JobApplicantManagementSort) {
  employerListInterviews(
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
  ) {
    interviews {
      address1
      address2
      city
      createdAt
      description
      employerNote
      id
      interviewEndTime
      interviewLink
      interviewStartTime
      interviewType
      note
      state
      status
      statusName
      statusUpdatedAt
      timezone
      title
      updateEvents
      updatedAt
      zipCode
    }
    totalCount
  }
}
    `;
export const useEmployerListInterviewsQuery = <
      TData = Types.EmployerListInterviewsQuery,
      TError = unknown
    >(
      variables?: Types.EmployerListInterviewsQueryVariables,
      options?: UseQueryOptions<Types.EmployerListInterviewsQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerListInterviewsQuery, TError, TData>(
      variables === undefined ? ['employerListInterviews'] : ['employerListInterviews', variables],
      fetcher<Types.EmployerListInterviewsQuery, Types.EmployerListInterviewsQueryVariables>(EmployerListInterviewsDocument, variables),
      options
    );

useEmployerListInterviewsQuery.getKey = (variables?: Types.EmployerListInterviewsQueryVariables) => variables === undefined ? ['employerListInterviews'] : ['employerListInterviews', variables];
;

export const useInfiniteEmployerListInterviewsQuery = <
      TData = Types.EmployerListInterviewsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerListInterviewsQueryVariables,
      variables?: Types.EmployerListInterviewsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerListInterviewsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerListInterviewsQuery, TError, TData>(
      variables === undefined ? ['employerListInterviews.infinite'] : ['employerListInterviews.infinite', variables],
      (metaData) => fetcher<Types.EmployerListInterviewsQuery, Types.EmployerListInterviewsQueryVariables>(EmployerListInterviewsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerListInterviewsQuery.getKey = (variables?: Types.EmployerListInterviewsQueryVariables) => variables === undefined ? ['employerListInterviews.infinite'] : ['employerListInterviews.infinite', variables];
;

useEmployerListInterviewsQuery.fetcher = (variables?: Types.EmployerListInterviewsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerListInterviewsQuery, Types.EmployerListInterviewsQueryVariables>(EmployerListInterviewsDocument, variables, options);
export const EmployerListJobApplicantsDocument = `
    query employerListJobApplicants($filter: JobApplicantFilter, $limit: Int, $offset: Int, $sortBy: JobApplicantManagementSort) {
  employerListJobApplicants(
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
  ) {
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    totalCount
  }
}
    `;
export const useEmployerListJobApplicantsQuery = <
      TData = Types.EmployerListJobApplicantsQuery,
      TError = unknown
    >(
      variables?: Types.EmployerListJobApplicantsQueryVariables,
      options?: UseQueryOptions<Types.EmployerListJobApplicantsQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerListJobApplicantsQuery, TError, TData>(
      variables === undefined ? ['employerListJobApplicants'] : ['employerListJobApplicants', variables],
      fetcher<Types.EmployerListJobApplicantsQuery, Types.EmployerListJobApplicantsQueryVariables>(EmployerListJobApplicantsDocument, variables),
      options
    );

useEmployerListJobApplicantsQuery.getKey = (variables?: Types.EmployerListJobApplicantsQueryVariables) => variables === undefined ? ['employerListJobApplicants'] : ['employerListJobApplicants', variables];
;

export const useInfiniteEmployerListJobApplicantsQuery = <
      TData = Types.EmployerListJobApplicantsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerListJobApplicantsQueryVariables,
      variables?: Types.EmployerListJobApplicantsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerListJobApplicantsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerListJobApplicantsQuery, TError, TData>(
      variables === undefined ? ['employerListJobApplicants.infinite'] : ['employerListJobApplicants.infinite', variables],
      (metaData) => fetcher<Types.EmployerListJobApplicantsQuery, Types.EmployerListJobApplicantsQueryVariables>(EmployerListJobApplicantsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerListJobApplicantsQuery.getKey = (variables?: Types.EmployerListJobApplicantsQueryVariables) => variables === undefined ? ['employerListJobApplicants.infinite'] : ['employerListJobApplicants.infinite', variables];
;

useEmployerListJobApplicantsQuery.fetcher = (variables?: Types.EmployerListJobApplicantsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerListJobApplicantsQuery, Types.EmployerListJobApplicantsQueryVariables>(EmployerListJobApplicantsDocument, variables, options);
export const EmployerListJobTemplatesDocument = `
    query employerListJobTemplates($after: String, $before: String, $first: Int, $last: Int, $templateNameContain: String) {
  employerListJobTemplates(
    after: $after
    before: $before
    first: $first
    last: $last
    templateNameContain: $templateNameContain
  ) {
    edges {
      cursor
    }
    nodes {
      clientId
      companyId
      id
      templateName
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useEmployerListJobTemplatesQuery = <
      TData = Types.EmployerListJobTemplatesQuery,
      TError = unknown
    >(
      variables?: Types.EmployerListJobTemplatesQueryVariables,
      options?: UseQueryOptions<Types.EmployerListJobTemplatesQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerListJobTemplatesQuery, TError, TData>(
      variables === undefined ? ['employerListJobTemplates'] : ['employerListJobTemplates', variables],
      fetcher<Types.EmployerListJobTemplatesQuery, Types.EmployerListJobTemplatesQueryVariables>(EmployerListJobTemplatesDocument, variables),
      options
    );

useEmployerListJobTemplatesQuery.getKey = (variables?: Types.EmployerListJobTemplatesQueryVariables) => variables === undefined ? ['employerListJobTemplates'] : ['employerListJobTemplates', variables];
;

export const useInfiniteEmployerListJobTemplatesQuery = <
      TData = Types.EmployerListJobTemplatesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerListJobTemplatesQueryVariables,
      variables?: Types.EmployerListJobTemplatesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerListJobTemplatesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerListJobTemplatesQuery, TError, TData>(
      variables === undefined ? ['employerListJobTemplates.infinite'] : ['employerListJobTemplates.infinite', variables],
      (metaData) => fetcher<Types.EmployerListJobTemplatesQuery, Types.EmployerListJobTemplatesQueryVariables>(EmployerListJobTemplatesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerListJobTemplatesQuery.getKey = (variables?: Types.EmployerListJobTemplatesQueryVariables) => variables === undefined ? ['employerListJobTemplates.infinite'] : ['employerListJobTemplates.infinite', variables];
;

useEmployerListJobTemplatesQuery.fetcher = (variables?: Types.EmployerListJobTemplatesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerListJobTemplatesQuery, Types.EmployerListJobTemplatesQueryVariables>(EmployerListJobTemplatesDocument, variables, options);
export const EmployerListLocationsDocument = `
    query employerListLocations($after: String, $before: String, $clientId: String, $first: Int, $last: Int, $nameContain: String, $status: LocationActiveEnum) {
  employerListLocations(
    after: $after
    before: $before
    clientId: $clientId
    first: $first
    last: $last
    nameContain: $nameContain
    status: $status
  ) {
    edges {
      cursor
    }
    nodes {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useEmployerListLocationsQuery = <
      TData = Types.EmployerListLocationsQuery,
      TError = unknown
    >(
      variables?: Types.EmployerListLocationsQueryVariables,
      options?: UseQueryOptions<Types.EmployerListLocationsQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerListLocationsQuery, TError, TData>(
      variables === undefined ? ['employerListLocations'] : ['employerListLocations', variables],
      fetcher<Types.EmployerListLocationsQuery, Types.EmployerListLocationsQueryVariables>(EmployerListLocationsDocument, variables),
      options
    );

useEmployerListLocationsQuery.getKey = (variables?: Types.EmployerListLocationsQueryVariables) => variables === undefined ? ['employerListLocations'] : ['employerListLocations', variables];
;

export const useInfiniteEmployerListLocationsQuery = <
      TData = Types.EmployerListLocationsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerListLocationsQueryVariables,
      variables?: Types.EmployerListLocationsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerListLocationsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerListLocationsQuery, TError, TData>(
      variables === undefined ? ['employerListLocations.infinite'] : ['employerListLocations.infinite', variables],
      (metaData) => fetcher<Types.EmployerListLocationsQuery, Types.EmployerListLocationsQueryVariables>(EmployerListLocationsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerListLocationsQuery.getKey = (variables?: Types.EmployerListLocationsQueryVariables) => variables === undefined ? ['employerListLocations.infinite'] : ['employerListLocations.infinite', variables];
;

useEmployerListLocationsQuery.fetcher = (variables?: Types.EmployerListLocationsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerListLocationsQuery, Types.EmployerListLocationsQueryVariables>(EmployerListLocationsDocument, variables, options);
export const EmployerListWorkersDocument = `
    query employerListWorkers($jobId: String!, $after: String, $before: String, $first: Int, $last: Int) {
  employerListWorkers(after: $after, before: $before, first: $first, last: $last) {
    edges {
      cursor
    }
    nodes {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useEmployerListWorkersQuery = <
      TData = Types.EmployerListWorkersQuery,
      TError = unknown
    >(
      variables: Types.EmployerListWorkersQueryVariables,
      options?: UseQueryOptions<Types.EmployerListWorkersQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerListWorkersQuery, TError, TData>(
      ['employerListWorkers', variables],
      fetcher<Types.EmployerListWorkersQuery, Types.EmployerListWorkersQueryVariables>(EmployerListWorkersDocument, variables),
      options
    );

useEmployerListWorkersQuery.getKey = (variables: Types.EmployerListWorkersQueryVariables) => ['employerListWorkers', variables];
;

export const useInfiniteEmployerListWorkersQuery = <
      TData = Types.EmployerListWorkersQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerListWorkersQueryVariables,
      variables: Types.EmployerListWorkersQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerListWorkersQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerListWorkersQuery, TError, TData>(
      ['employerListWorkers.infinite', variables],
      (metaData) => fetcher<Types.EmployerListWorkersQuery, Types.EmployerListWorkersQueryVariables>(EmployerListWorkersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerListWorkersQuery.getKey = (variables: Types.EmployerListWorkersQueryVariables) => ['employerListWorkers.infinite', variables];
;

useEmployerListWorkersQuery.fetcher = (variables: Types.EmployerListWorkersQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerListWorkersQuery, Types.EmployerListWorkersQueryVariables>(EmployerListWorkersDocument, variables, options);
export const EmployerSearchJobsDocument = `
    query employerSearchJobs($filter: JobFilter, $limit: Int, $offset: Int, $sortBy: JobManagementSort) {
  employerSearchJobs(
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
  ) {
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    summary {
      disciplines
    }
    totalCount
  }
}
    `;
export const useEmployerSearchJobsQuery = <
      TData = Types.EmployerSearchJobsQuery,
      TError = unknown
    >(
      variables?: Types.EmployerSearchJobsQueryVariables,
      options?: UseQueryOptions<Types.EmployerSearchJobsQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerSearchJobsQuery, TError, TData>(
      variables === undefined ? ['employerSearchJobs'] : ['employerSearchJobs', variables],
      fetcher<Types.EmployerSearchJobsQuery, Types.EmployerSearchJobsQueryVariables>(EmployerSearchJobsDocument, variables),
      options
    );

useEmployerSearchJobsQuery.getKey = (variables?: Types.EmployerSearchJobsQueryVariables) => variables === undefined ? ['employerSearchJobs'] : ['employerSearchJobs', variables];
;

export const useInfiniteEmployerSearchJobsQuery = <
      TData = Types.EmployerSearchJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerSearchJobsQueryVariables,
      variables?: Types.EmployerSearchJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerSearchJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerSearchJobsQuery, TError, TData>(
      variables === undefined ? ['employerSearchJobs.infinite'] : ['employerSearchJobs.infinite', variables],
      (metaData) => fetcher<Types.EmployerSearchJobsQuery, Types.EmployerSearchJobsQueryVariables>(EmployerSearchJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerSearchJobsQuery.getKey = (variables?: Types.EmployerSearchJobsQueryVariables) => variables === undefined ? ['employerSearchJobs.infinite'] : ['employerSearchJobs.infinite', variables];
;

useEmployerSearchJobsQuery.fetcher = (variables?: Types.EmployerSearchJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerSearchJobsQuery, Types.EmployerSearchJobsQueryVariables>(EmployerSearchJobsDocument, variables, options);
export const EmployerSearchWorkersDocument = `
    query employerSearchWorkers($jobId: String!, $filter: WorkerFilter, $jobId1: String, $limit: Int, $offset: Int, $sortBy: WorkerManagementSort) {
  employerSearchWorkers(
    filter: $filter
    jobId: $jobId1
    limit: $limit
    offset: $offset
    sortBy: $sortBy
  ) {
    totalCount
    workers {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useEmployerSearchWorkersQuery = <
      TData = Types.EmployerSearchWorkersQuery,
      TError = unknown
    >(
      variables: Types.EmployerSearchWorkersQueryVariables,
      options?: UseQueryOptions<Types.EmployerSearchWorkersQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerSearchWorkersQuery, TError, TData>(
      ['employerSearchWorkers', variables],
      fetcher<Types.EmployerSearchWorkersQuery, Types.EmployerSearchWorkersQueryVariables>(EmployerSearchWorkersDocument, variables),
      options
    );

useEmployerSearchWorkersQuery.getKey = (variables: Types.EmployerSearchWorkersQueryVariables) => ['employerSearchWorkers', variables];
;

export const useInfiniteEmployerSearchWorkersQuery = <
      TData = Types.EmployerSearchWorkersQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerSearchWorkersQueryVariables,
      variables: Types.EmployerSearchWorkersQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerSearchWorkersQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerSearchWorkersQuery, TError, TData>(
      ['employerSearchWorkers.infinite', variables],
      (metaData) => fetcher<Types.EmployerSearchWorkersQuery, Types.EmployerSearchWorkersQueryVariables>(EmployerSearchWorkersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerSearchWorkersQuery.getKey = (variables: Types.EmployerSearchWorkersQueryVariables) => ['employerSearchWorkers.infinite', variables];
;

useEmployerSearchWorkersQuery.fetcher = (variables: Types.EmployerSearchWorkersQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerSearchWorkersQuery, Types.EmployerSearchWorkersQueryVariables>(EmployerSearchWorkersDocument, variables, options);
export const EmployerSummaryDocument = `
    query employerSummary($filter: EmployerSummaryFilters, $limit: Int, $offset: Int, $filter1: EmployerSummaryFilters!, $filter2: EmployerSummaryFilters, $clientId: String) {
  employerSummary(clientId: $clientId) {
    clients {
      activeClientCount
      newClientsCount
    }
    dateRanges
    employer {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    jobApplicants(filter: $filter, limit: $limit, offset: $offset) {
      activeJobApplicantsCount
      newJobApplicantsCount
    }
    jobs {
      fillRate
      newJobsCount
    }
    onboardingSubmissions(filter: $filter1)
    reports(filter: $filter2) {
      jobApplicants
      jobApplicantsCompletedCount
      jobsAvailableCount
      jobsCompletedCount
      totalFacilityLocationsCount
      totalJobApplicantsCount
    }
    workers {
      activeWorkersCount
      directHiredCount
      newWorkersCount
      normalInterviewCount
    }
  }
}
    `;
export const useEmployerSummaryQuery = <
      TData = Types.EmployerSummaryQuery,
      TError = unknown
    >(
      variables: Types.EmployerSummaryQueryVariables,
      options?: UseQueryOptions<Types.EmployerSummaryQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerSummaryQuery, TError, TData>(
      ['employerSummary', variables],
      fetcher<Types.EmployerSummaryQuery, Types.EmployerSummaryQueryVariables>(EmployerSummaryDocument, variables),
      options
    );

useEmployerSummaryQuery.getKey = (variables: Types.EmployerSummaryQueryVariables) => ['employerSummary', variables];
;

export const useInfiniteEmployerSummaryQuery = <
      TData = Types.EmployerSummaryQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerSummaryQueryVariables,
      variables: Types.EmployerSummaryQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerSummaryQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerSummaryQuery, TError, TData>(
      ['employerSummary.infinite', variables],
      (metaData) => fetcher<Types.EmployerSummaryQuery, Types.EmployerSummaryQueryVariables>(EmployerSummaryDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerSummaryQuery.getKey = (variables: Types.EmployerSummaryQueryVariables) => ['employerSummary.infinite', variables];
;

useEmployerSummaryQuery.fetcher = (variables: Types.EmployerSummaryQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerSummaryQuery, Types.EmployerSummaryQueryVariables>(EmployerSummaryDocument, variables, options);
export const EmployerTalentJobsDocument = `
    query employerTalentJobs($favorited: Boolean, $filter: JobFilter, $limit: Int, $offset: Int, $sortBy: JobManagementSort) {
  employerTalentJobs(
    favorited: $favorited
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
  ) {
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    summary {
      disciplines
    }
    totalCount
  }
}
    `;
export const useEmployerTalentJobsQuery = <
      TData = Types.EmployerTalentJobsQuery,
      TError = unknown
    >(
      variables?: Types.EmployerTalentJobsQueryVariables,
      options?: UseQueryOptions<Types.EmployerTalentJobsQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerTalentJobsQuery, TError, TData>(
      variables === undefined ? ['employerTalentJobs'] : ['employerTalentJobs', variables],
      fetcher<Types.EmployerTalentJobsQuery, Types.EmployerTalentJobsQueryVariables>(EmployerTalentJobsDocument, variables),
      options
    );

useEmployerTalentJobsQuery.getKey = (variables?: Types.EmployerTalentJobsQueryVariables) => variables === undefined ? ['employerTalentJobs'] : ['employerTalentJobs', variables];
;

export const useInfiniteEmployerTalentJobsQuery = <
      TData = Types.EmployerTalentJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerTalentJobsQueryVariables,
      variables?: Types.EmployerTalentJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerTalentJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerTalentJobsQuery, TError, TData>(
      variables === undefined ? ['employerTalentJobs.infinite'] : ['employerTalentJobs.infinite', variables],
      (metaData) => fetcher<Types.EmployerTalentJobsQuery, Types.EmployerTalentJobsQueryVariables>(EmployerTalentJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerTalentJobsQuery.getKey = (variables?: Types.EmployerTalentJobsQueryVariables) => variables === undefined ? ['employerTalentJobs.infinite'] : ['employerTalentJobs.infinite', variables];
;

useEmployerTalentJobsQuery.fetcher = (variables?: Types.EmployerTalentJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerTalentJobsQuery, Types.EmployerTalentJobsQueryVariables>(EmployerTalentJobsDocument, variables, options);
export const EmployerTalentWorkersDocument = `
    query employerTalentWorkers($jobId: String!, $favorited: Boolean, $filter: WorkerFilter, $jobId1: String, $limit: Int, $offset: Int, $sortBy: WorkerManagementSort) {
  employerTalentWorkers(
    favorited: $favorited
    filter: $filter
    jobId: $jobId1
    limit: $limit
    offset: $offset
    sortBy: $sortBy
  ) {
    totalCount
    workers {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useEmployerTalentWorkersQuery = <
      TData = Types.EmployerTalentWorkersQuery,
      TError = unknown
    >(
      variables: Types.EmployerTalentWorkersQueryVariables,
      options?: UseQueryOptions<Types.EmployerTalentWorkersQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerTalentWorkersQuery, TError, TData>(
      ['employerTalentWorkers', variables],
      fetcher<Types.EmployerTalentWorkersQuery, Types.EmployerTalentWorkersQueryVariables>(EmployerTalentWorkersDocument, variables),
      options
    );

useEmployerTalentWorkersQuery.getKey = (variables: Types.EmployerTalentWorkersQueryVariables) => ['employerTalentWorkers', variables];
;

export const useInfiniteEmployerTalentWorkersQuery = <
      TData = Types.EmployerTalentWorkersQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerTalentWorkersQueryVariables,
      variables: Types.EmployerTalentWorkersQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerTalentWorkersQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerTalentWorkersQuery, TError, TData>(
      ['employerTalentWorkers.infinite', variables],
      (metaData) => fetcher<Types.EmployerTalentWorkersQuery, Types.EmployerTalentWorkersQueryVariables>(EmployerTalentWorkersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerTalentWorkersQuery.getKey = (variables: Types.EmployerTalentWorkersQueryVariables) => ['employerTalentWorkers.infinite', variables];
;

useEmployerTalentWorkersQuery.fetcher = (variables: Types.EmployerTalentWorkersQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerTalentWorkersQuery, Types.EmployerTalentWorkersQueryVariables>(EmployerTalentWorkersDocument, variables, options);
export const EmployerWorkerDetailsDocument = `
    query employerWorkerDetails($size: [String!]!, $jobId: String!, $size1: [String!]!, $id: String!) {
  employerWorkerDetails(id: $id) {
    agreedToTerms
    availableStartDate
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    avatarUrl
    blocked
    blockedClient {
      note
    }
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
    dateOfBirth
    email
    emergencyContact {
      contactName
      contactPhone
      contactRelationship
      id
      workerId
    }
    employmentType
    facilityTypes
    firstName
    hasActiveAssignment
    id
    isFavorited
    jobCategoriesWorkedNumber
    jobMatchingScore(jobId: $jobId)
    lastName
    lastOtpExpiredAt
    lastSignInAt
    locationsWorkedNumber
    maidenName
    noCall
    noEmail
    noNotification
    noSms
    noTalentMatches
    notificationSetting {
      assignmentEndingReminder
      completeOnboarding
      documentExpired
      id
      interviewInvitationExpired
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
    profilePercentageCompleted
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
    remainingExpirationTime
    resumes {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size1)
      thumbnails
    }
    shiftRequested
    socialSecurityNumber
    supportDocuments {
      documentType
      id
    }
    timeOffRequested
    totalUnreadMessage
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
    workerCertifications {
      certificationType
      compactLicense
      createdAt
      expirationDate
      id
      licenseDiscipline
      licenseNumber
      licenseState
      title
    }
    workerEducations {
      city
      country
      createdAt
      degreeDate
      degreeName
      id
      major
      schoolName
      state
    }
    workerNotes {
      id
      note
      noteType
    }
    workerOnboardings {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
    workerReferences {
      city
      contactEmail
      contactFirstName
      contactFullName
      contactLastName
      contactPhone
      createdAt
      facilityName
      id
      jobTitle
      refType
      relationship
      salutation
      state
      workedFrom
      workedTo
    }
    workerSpecialties {
      category
      completedChecklist
      id
      isExpired
      isPrimary
      specialty
      specialtyId
      specialtyLongName
      status
    }
    workingAuthorization {
      dateOfBirth
      id
      idPhotoUrl
      legalRightToWork
      socialSecurityNumber
      workerId
    }
    workingPreferredLocations {
      id
      preferredWorkingCity
      preferredWorkingState
    }
  }
}
    `;
export const useEmployerWorkerDetailsQuery = <
      TData = Types.EmployerWorkerDetailsQuery,
      TError = unknown
    >(
      variables: Types.EmployerWorkerDetailsQueryVariables,
      options?: UseQueryOptions<Types.EmployerWorkerDetailsQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerWorkerDetailsQuery, TError, TData>(
      ['employerWorkerDetails', variables],
      fetcher<Types.EmployerWorkerDetailsQuery, Types.EmployerWorkerDetailsQueryVariables>(EmployerWorkerDetailsDocument, variables),
      options
    );

useEmployerWorkerDetailsQuery.getKey = (variables: Types.EmployerWorkerDetailsQueryVariables) => ['employerWorkerDetails', variables];
;

export const useInfiniteEmployerWorkerDetailsQuery = <
      TData = Types.EmployerWorkerDetailsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerWorkerDetailsQueryVariables,
      variables: Types.EmployerWorkerDetailsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerWorkerDetailsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerWorkerDetailsQuery, TError, TData>(
      ['employerWorkerDetails.infinite', variables],
      (metaData) => fetcher<Types.EmployerWorkerDetailsQuery, Types.EmployerWorkerDetailsQueryVariables>(EmployerWorkerDetailsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerWorkerDetailsQuery.getKey = (variables: Types.EmployerWorkerDetailsQueryVariables) => ['employerWorkerDetails.infinite', variables];
;

useEmployerWorkerDetailsQuery.fetcher = (variables: Types.EmployerWorkerDetailsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerWorkerDetailsQuery, Types.EmployerWorkerDetailsQueryVariables>(EmployerWorkerDetailsDocument, variables, options);
export const EmployerWorkerJobMatchesDocument = `
    query employerWorkerJobMatches($after: String, $before: String, $first: Int, $last: Int, $workerId: String!) {
  employerWorkerJobMatches(
    after: $after
    before: $before
    first: $first
    last: $last
    workerId: $workerId
  ) {
    edges {
      cursor
    }
    nodes {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useEmployerWorkerJobMatchesQuery = <
      TData = Types.EmployerWorkerJobMatchesQuery,
      TError = unknown
    >(
      variables: Types.EmployerWorkerJobMatchesQueryVariables,
      options?: UseQueryOptions<Types.EmployerWorkerJobMatchesQuery, TError, TData>
    ) =>
    useQuery<Types.EmployerWorkerJobMatchesQuery, TError, TData>(
      ['employerWorkerJobMatches', variables],
      fetcher<Types.EmployerWorkerJobMatchesQuery, Types.EmployerWorkerJobMatchesQueryVariables>(EmployerWorkerJobMatchesDocument, variables),
      options
    );

useEmployerWorkerJobMatchesQuery.getKey = (variables: Types.EmployerWorkerJobMatchesQueryVariables) => ['employerWorkerJobMatches', variables];
;

export const useInfiniteEmployerWorkerJobMatchesQuery = <
      TData = Types.EmployerWorkerJobMatchesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.EmployerWorkerJobMatchesQueryVariables,
      variables: Types.EmployerWorkerJobMatchesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.EmployerWorkerJobMatchesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.EmployerWorkerJobMatchesQuery, TError, TData>(
      ['employerWorkerJobMatches.infinite', variables],
      (metaData) => fetcher<Types.EmployerWorkerJobMatchesQuery, Types.EmployerWorkerJobMatchesQueryVariables>(EmployerWorkerJobMatchesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteEmployerWorkerJobMatchesQuery.getKey = (variables: Types.EmployerWorkerJobMatchesQueryVariables) => ['employerWorkerJobMatches.infinite', variables];
;

useEmployerWorkerJobMatchesQuery.fetcher = (variables: Types.EmployerWorkerJobMatchesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.EmployerWorkerJobMatchesQuery, Types.EmployerWorkerJobMatchesQueryVariables>(EmployerWorkerJobMatchesDocument, variables, options);
export const ExportFileDocument = `
    query exportFile($id: String!) {
  exportFile(id: $id) {
    companyId
    fileType
    fileUrl
    id
    status
  }
}
    `;
export const useExportFileQuery = <
      TData = Types.ExportFileQuery,
      TError = unknown
    >(
      variables: Types.ExportFileQueryVariables,
      options?: UseQueryOptions<Types.ExportFileQuery, TError, TData>
    ) =>
    useQuery<Types.ExportFileQuery, TError, TData>(
      ['exportFile', variables],
      fetcher<Types.ExportFileQuery, Types.ExportFileQueryVariables>(ExportFileDocument, variables),
      options
    );

useExportFileQuery.getKey = (variables: Types.ExportFileQueryVariables) => ['exportFile', variables];
;

export const useInfiniteExportFileQuery = <
      TData = Types.ExportFileQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.ExportFileQueryVariables,
      variables: Types.ExportFileQueryVariables,
      options?: UseInfiniteQueryOptions<Types.ExportFileQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.ExportFileQuery, TError, TData>(
      ['exportFile.infinite', variables],
      (metaData) => fetcher<Types.ExportFileQuery, Types.ExportFileQueryVariables>(ExportFileDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteExportFileQuery.getKey = (variables: Types.ExportFileQueryVariables) => ['exportFile.infinite', variables];
;

useExportFileQuery.fetcher = (variables: Types.ExportFileQueryVariables, options?: RequestInit['headers']) => fetcher<Types.ExportFileQuery, Types.ExportFileQueryVariables>(ExportFileDocument, variables, options);
export const FavoritedJobsDocument = `
    query favoritedJobs($after: String, $before: String, $first: Int, $last: Int) {
  favoritedJobs(after: $after, before: $before, first: $first, last: $last) {
    edges {
      cursor
    }
    nodes {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useFavoritedJobsQuery = <
      TData = Types.FavoritedJobsQuery,
      TError = unknown
    >(
      variables?: Types.FavoritedJobsQueryVariables,
      options?: UseQueryOptions<Types.FavoritedJobsQuery, TError, TData>
    ) =>
    useQuery<Types.FavoritedJobsQuery, TError, TData>(
      variables === undefined ? ['favoritedJobs'] : ['favoritedJobs', variables],
      fetcher<Types.FavoritedJobsQuery, Types.FavoritedJobsQueryVariables>(FavoritedJobsDocument, variables),
      options
    );

useFavoritedJobsQuery.getKey = (variables?: Types.FavoritedJobsQueryVariables) => variables === undefined ? ['favoritedJobs'] : ['favoritedJobs', variables];
;

export const useInfiniteFavoritedJobsQuery = <
      TData = Types.FavoritedJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.FavoritedJobsQueryVariables,
      variables?: Types.FavoritedJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.FavoritedJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.FavoritedJobsQuery, TError, TData>(
      variables === undefined ? ['favoritedJobs.infinite'] : ['favoritedJobs.infinite', variables],
      (metaData) => fetcher<Types.FavoritedJobsQuery, Types.FavoritedJobsQueryVariables>(FavoritedJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteFavoritedJobsQuery.getKey = (variables?: Types.FavoritedJobsQueryVariables) => variables === undefined ? ['favoritedJobs.infinite'] : ['favoritedJobs.infinite', variables];
;

useFavoritedJobsQuery.fetcher = (variables?: Types.FavoritedJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.FavoritedJobsQuery, Types.FavoritedJobsQueryVariables>(FavoritedJobsDocument, variables, options);
export const HotJobsDocument = `
    query hotJobs($filter: JobFilter, $limit: Int, $offset: Int, $sortBy: JobManagementSort, $summaryRequire: Boolean) {
  hotJobs(
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
    summaryRequire: $summaryRequire
  ) {
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    summary {
      disciplines
    }
    totalCount
  }
}
    `;
export const useHotJobsQuery = <
      TData = Types.HotJobsQuery,
      TError = unknown
    >(
      variables?: Types.HotJobsQueryVariables,
      options?: UseQueryOptions<Types.HotJobsQuery, TError, TData>
    ) =>
    useQuery<Types.HotJobsQuery, TError, TData>(
      variables === undefined ? ['hotJobs'] : ['hotJobs', variables],
      fetcher<Types.HotJobsQuery, Types.HotJobsQueryVariables>(HotJobsDocument, variables),
      options
    );

useHotJobsQuery.getKey = (variables?: Types.HotJobsQueryVariables) => variables === undefined ? ['hotJobs'] : ['hotJobs', variables];
;

export const useInfiniteHotJobsQuery = <
      TData = Types.HotJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.HotJobsQueryVariables,
      variables?: Types.HotJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.HotJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.HotJobsQuery, TError, TData>(
      variables === undefined ? ['hotJobs.infinite'] : ['hotJobs.infinite', variables],
      (metaData) => fetcher<Types.HotJobsQuery, Types.HotJobsQueryVariables>(HotJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteHotJobsQuery.getKey = (variables?: Types.HotJobsQueryVariables) => variables === undefined ? ['hotJobs.infinite'] : ['hotJobs.infinite', variables];
;

useHotJobsQuery.fetcher = (variables?: Types.HotJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.HotJobsQuery, Types.HotJobsQueryVariables>(HotJobsDocument, variables, options);
export const ImportBatchDocument = `
    query importBatch($id: String!) {
  importBatch(id: $id) {
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
    employer {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    id
    objectType
    results
    status
  }
}
    `;
export const useImportBatchQuery = <
      TData = Types.ImportBatchQuery,
      TError = unknown
    >(
      variables: Types.ImportBatchQueryVariables,
      options?: UseQueryOptions<Types.ImportBatchQuery, TError, TData>
    ) =>
    useQuery<Types.ImportBatchQuery, TError, TData>(
      ['importBatch', variables],
      fetcher<Types.ImportBatchQuery, Types.ImportBatchQueryVariables>(ImportBatchDocument, variables),
      options
    );

useImportBatchQuery.getKey = (variables: Types.ImportBatchQueryVariables) => ['importBatch', variables];
;

export const useInfiniteImportBatchQuery = <
      TData = Types.ImportBatchQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.ImportBatchQueryVariables,
      variables: Types.ImportBatchQueryVariables,
      options?: UseInfiniteQueryOptions<Types.ImportBatchQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.ImportBatchQuery, TError, TData>(
      ['importBatch.infinite', variables],
      (metaData) => fetcher<Types.ImportBatchQuery, Types.ImportBatchQueryVariables>(ImportBatchDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteImportBatchQuery.getKey = (variables: Types.ImportBatchQueryVariables) => ['importBatch.infinite', variables];
;

useImportBatchQuery.fetcher = (variables: Types.ImportBatchQueryVariables, options?: RequestInit['headers']) => fetcher<Types.ImportBatchQuery, Types.ImportBatchQueryVariables>(ImportBatchDocument, variables, options);
export const InvoiceDetailsDocument = `
    query invoiceDetails($id: String!) {
  invoiceDetails(id: $id) {
    amountDue
    amountPaid
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    createdAt
    description
    externalId
    id
    invoicePdf
    number
    paidAt
    rawData
    status
  }
}
    `;
export const useInvoiceDetailsQuery = <
      TData = Types.InvoiceDetailsQuery,
      TError = unknown
    >(
      variables: Types.InvoiceDetailsQueryVariables,
      options?: UseQueryOptions<Types.InvoiceDetailsQuery, TError, TData>
    ) =>
    useQuery<Types.InvoiceDetailsQuery, TError, TData>(
      ['invoiceDetails', variables],
      fetcher<Types.InvoiceDetailsQuery, Types.InvoiceDetailsQueryVariables>(InvoiceDetailsDocument, variables),
      options
    );

useInvoiceDetailsQuery.getKey = (variables: Types.InvoiceDetailsQueryVariables) => ['invoiceDetails', variables];
;

export const useInfiniteInvoiceDetailsQuery = <
      TData = Types.InvoiceDetailsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.InvoiceDetailsQueryVariables,
      variables: Types.InvoiceDetailsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.InvoiceDetailsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.InvoiceDetailsQuery, TError, TData>(
      ['invoiceDetails.infinite', variables],
      (metaData) => fetcher<Types.InvoiceDetailsQuery, Types.InvoiceDetailsQueryVariables>(InvoiceDetailsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteInvoiceDetailsQuery.getKey = (variables: Types.InvoiceDetailsQueryVariables) => ['invoiceDetails.infinite', variables];
;

useInvoiceDetailsQuery.fetcher = (variables: Types.InvoiceDetailsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.InvoiceDetailsQuery, Types.InvoiceDetailsQueryVariables>(InvoiceDetailsDocument, variables, options);
export const InvoicesDocument = `
    query invoices($after: String, $before: String, $first: Int, $last: Int) {
  invoices(after: $after, before: $before, first: $first, last: $last) {
    edges {
      cursor
    }
    nodes {
      amountDue
      amountPaid
      createdAt
      description
      externalId
      id
      invoicePdf
      number
      paidAt
      rawData
      status
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useInvoicesQuery = <
      TData = Types.InvoicesQuery,
      TError = unknown
    >(
      variables?: Types.InvoicesQueryVariables,
      options?: UseQueryOptions<Types.InvoicesQuery, TError, TData>
    ) =>
    useQuery<Types.InvoicesQuery, TError, TData>(
      variables === undefined ? ['invoices'] : ['invoices', variables],
      fetcher<Types.InvoicesQuery, Types.InvoicesQueryVariables>(InvoicesDocument, variables),
      options
    );

useInvoicesQuery.getKey = (variables?: Types.InvoicesQueryVariables) => variables === undefined ? ['invoices'] : ['invoices', variables];
;

export const useInfiniteInvoicesQuery = <
      TData = Types.InvoicesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.InvoicesQueryVariables,
      variables?: Types.InvoicesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.InvoicesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.InvoicesQuery, TError, TData>(
      variables === undefined ? ['invoices.infinite'] : ['invoices.infinite', variables],
      (metaData) => fetcher<Types.InvoicesQuery, Types.InvoicesQueryVariables>(InvoicesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteInvoicesQuery.getKey = (variables?: Types.InvoicesQueryVariables) => variables === undefined ? ['invoices.infinite'] : ['invoices.infinite', variables];
;

useInvoicesQuery.fetcher = (variables?: Types.InvoicesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.InvoicesQuery, Types.InvoicesQueryVariables>(InvoicesDocument, variables, options);
export const JobDocument = `
    query job($id: String!) {
  job(id: $id) {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
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
export const JobAlertsDocument = `
    query jobAlerts($after: String, $before: String, $first: Int, $last: Int) {
  jobAlerts(after: $after, before: $before, first: $first, last: $last) {
    edges {
      cursor
    }
    nodes {
      alertChannel
      alertEmail
      alertFirstName
      alertLastName
      companyId
      deviceId
      enableAlert
      frequency
      id
      lastAlertedAt
      name
      pauseAlert
      pauseAlertPeriod
      pauseAlertUntil
      startPauseAlertDate
      workerId
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useJobAlertsQuery = <
      TData = Types.JobAlertsQuery,
      TError = unknown
    >(
      variables?: Types.JobAlertsQueryVariables,
      options?: UseQueryOptions<Types.JobAlertsQuery, TError, TData>
    ) =>
    useQuery<Types.JobAlertsQuery, TError, TData>(
      variables === undefined ? ['jobAlerts'] : ['jobAlerts', variables],
      fetcher<Types.JobAlertsQuery, Types.JobAlertsQueryVariables>(JobAlertsDocument, variables),
      options
    );

useJobAlertsQuery.getKey = (variables?: Types.JobAlertsQueryVariables) => variables === undefined ? ['jobAlerts'] : ['jobAlerts', variables];
;

export const useInfiniteJobAlertsQuery = <
      TData = Types.JobAlertsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.JobAlertsQueryVariables,
      variables?: Types.JobAlertsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.JobAlertsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.JobAlertsQuery, TError, TData>(
      variables === undefined ? ['jobAlerts.infinite'] : ['jobAlerts.infinite', variables],
      (metaData) => fetcher<Types.JobAlertsQuery, Types.JobAlertsQueryVariables>(JobAlertsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteJobAlertsQuery.getKey = (variables?: Types.JobAlertsQueryVariables) => variables === undefined ? ['jobAlerts.infinite'] : ['jobAlerts.infinite', variables];
;

useJobAlertsQuery.fetcher = (variables?: Types.JobAlertsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.JobAlertsQuery, Types.JobAlertsQueryVariables>(JobAlertsDocument, variables, options);
export const JobApplicantDocument = `
    query jobApplicant($jobId: String!, $id: String!) {
  jobApplicant(id: $id) {
    address
    address2
    applicantTimeOffs {
      endDate
      id
      startDate
    }
    applicationProcess
    applyDate
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkerAssignment {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    discipline
    duration
    durationType
    employerNote
    frequency
    id
    interview {
      address1
      address2
      city
      createdAt
      description
      employerNote
      id
      interviewEndTime
      interviewLink
      interviewStartTime
      interviewType
      note
      state
      status
      statusName
      statusUpdatedAt
      timezone
      title
      updateEvents
      updatedAt
      zipCode
    }
    isDirectOffer
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicantActivities {
      createdAt
      id
      owner
      statusChanged
      updatedAt
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    note
    offerDate
    payAmount
    shifts
    source
    specialty
    startDate
    startedStatus
    startedStatusName
    state
    status
    statusName
    statusUpdatedAt
    submittal {
      externalUpdatedAt
      id
      jobId
      status
      submittalDate
      workerId
    }
    timeOffEndDate
    timeOffStartDate
    updateEvents
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerAssignments {
      address
      address2
      availableToExtend
      city
      country
      createdAt
      discipline
      duration
      durationType
      endDate
      frequency
      id
      jobTitle
      latitude
      longitude
      minPayAmount
      payAmount
      shifts
      specialty
      startDate
      state
      status
      updatedAt
      zipcode
    }
    zipcode
  }
}
    `;
export const useJobApplicantQuery = <
      TData = Types.JobApplicantQuery,
      TError = unknown
    >(
      variables: Types.JobApplicantQueryVariables,
      options?: UseQueryOptions<Types.JobApplicantQuery, TError, TData>
    ) =>
    useQuery<Types.JobApplicantQuery, TError, TData>(
      ['jobApplicant', variables],
      fetcher<Types.JobApplicantQuery, Types.JobApplicantQueryVariables>(JobApplicantDocument, variables),
      options
    );

useJobApplicantQuery.getKey = (variables: Types.JobApplicantQueryVariables) => ['jobApplicant', variables];
;

export const useInfiniteJobApplicantQuery = <
      TData = Types.JobApplicantQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.JobApplicantQueryVariables,
      variables: Types.JobApplicantQueryVariables,
      options?: UseInfiniteQueryOptions<Types.JobApplicantQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.JobApplicantQuery, TError, TData>(
      ['jobApplicant.infinite', variables],
      (metaData) => fetcher<Types.JobApplicantQuery, Types.JobApplicantQueryVariables>(JobApplicantDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteJobApplicantQuery.getKey = (variables: Types.JobApplicantQueryVariables) => ['jobApplicant.infinite', variables];
;

useJobApplicantQuery.fetcher = (variables: Types.JobApplicantQueryVariables, options?: RequestInit['headers']) => fetcher<Types.JobApplicantQuery, Types.JobApplicantQueryVariables>(JobApplicantDocument, variables, options);
export const JobApplicantsDocument = `
    query jobApplicants($filter: JobApplicantFilter, $limit: Int, $offset: Int, $sortBy: JobApplicantManagementSort) {
  jobApplicants(filter: $filter, limit: $limit, offset: $offset, sortBy: $sortBy) {
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    totalCount
  }
}
    `;
export const useJobApplicantsQuery = <
      TData = Types.JobApplicantsQuery,
      TError = unknown
    >(
      variables?: Types.JobApplicantsQueryVariables,
      options?: UseQueryOptions<Types.JobApplicantsQuery, TError, TData>
    ) =>
    useQuery<Types.JobApplicantsQuery, TError, TData>(
      variables === undefined ? ['jobApplicants'] : ['jobApplicants', variables],
      fetcher<Types.JobApplicantsQuery, Types.JobApplicantsQueryVariables>(JobApplicantsDocument, variables),
      options
    );

useJobApplicantsQuery.getKey = (variables?: Types.JobApplicantsQueryVariables) => variables === undefined ? ['jobApplicants'] : ['jobApplicants', variables];
;

export const useInfiniteJobApplicantsQuery = <
      TData = Types.JobApplicantsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.JobApplicantsQueryVariables,
      variables?: Types.JobApplicantsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.JobApplicantsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.JobApplicantsQuery, TError, TData>(
      variables === undefined ? ['jobApplicants.infinite'] : ['jobApplicants.infinite', variables],
      (metaData) => fetcher<Types.JobApplicantsQuery, Types.JobApplicantsQueryVariables>(JobApplicantsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteJobApplicantsQuery.getKey = (variables?: Types.JobApplicantsQueryVariables) => variables === undefined ? ['jobApplicants.infinite'] : ['jobApplicants.infinite', variables];
;

useJobApplicantsQuery.fetcher = (variables?: Types.JobApplicantsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.JobApplicantsQuery, Types.JobApplicantsQueryVariables>(JobApplicantsDocument, variables, options);
export const JobSearchDocument = `
    query jobSearch($filter: JobFilter, $limit: Int, $offset: Int, $sortBy: JobManagementSort, $summaryRequire: Boolean) {
  jobSearch(
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
    summaryRequire: $summaryRequire
  ) {
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    summary {
      disciplines
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
export const LastViewedJobsDocument = `
    query lastViewedJobs {
  lastViewedJobs {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    distance
    distanceToCurrentUserSearchLocation
    draftId
    duration
    durationType
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hospital
    hoursPerWeek
    id
    images
    isAsap
    isBookmarked
    isDisliked
    isFavorited
    isLiked
    isSkillChecklist
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    latitude
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    locationImage {
      city
      id
      state
    }
    longitude
    matchingPercentage
    minExpYear
    minWeeklyPayAmount
    noTalentMatches
    profileRequirements
    publishedAt
    requirementNotes
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const useLastViewedJobsQuery = <
      TData = Types.LastViewedJobsQuery,
      TError = unknown
    >(
      variables?: Types.LastViewedJobsQueryVariables,
      options?: UseQueryOptions<Types.LastViewedJobsQuery, TError, TData>
    ) =>
    useQuery<Types.LastViewedJobsQuery, TError, TData>(
      variables === undefined ? ['lastViewedJobs'] : ['lastViewedJobs', variables],
      fetcher<Types.LastViewedJobsQuery, Types.LastViewedJobsQueryVariables>(LastViewedJobsDocument, variables),
      options
    );

useLastViewedJobsQuery.getKey = (variables?: Types.LastViewedJobsQueryVariables) => variables === undefined ? ['lastViewedJobs'] : ['lastViewedJobs', variables];
;

export const useInfiniteLastViewedJobsQuery = <
      TData = Types.LastViewedJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.LastViewedJobsQueryVariables,
      variables?: Types.LastViewedJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.LastViewedJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.LastViewedJobsQuery, TError, TData>(
      variables === undefined ? ['lastViewedJobs.infinite'] : ['lastViewedJobs.infinite', variables],
      (metaData) => fetcher<Types.LastViewedJobsQuery, Types.LastViewedJobsQueryVariables>(LastViewedJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteLastViewedJobsQuery.getKey = (variables?: Types.LastViewedJobsQueryVariables) => variables === undefined ? ['lastViewedJobs.infinite'] : ['lastViewedJobs.infinite', variables];
;

useLastViewedJobsQuery.fetcher = (variables?: Types.LastViewedJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.LastViewedJobsQuery, Types.LastViewedJobsQueryVariables>(LastViewedJobsDocument, variables, options);
export const LikedJobsDocument = `
    query likedJobs($after: String, $before: String, $first: Int, $last: Int) {
  likedJobs(after: $after, before: $before, first: $first, last: $last) {
    edges {
      cursor
    }
    nodes {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useLikedJobsQuery = <
      TData = Types.LikedJobsQuery,
      TError = unknown
    >(
      variables?: Types.LikedJobsQueryVariables,
      options?: UseQueryOptions<Types.LikedJobsQuery, TError, TData>
    ) =>
    useQuery<Types.LikedJobsQuery, TError, TData>(
      variables === undefined ? ['likedJobs'] : ['likedJobs', variables],
      fetcher<Types.LikedJobsQuery, Types.LikedJobsQueryVariables>(LikedJobsDocument, variables),
      options
    );

useLikedJobsQuery.getKey = (variables?: Types.LikedJobsQueryVariables) => variables === undefined ? ['likedJobs'] : ['likedJobs', variables];
;

export const useInfiniteLikedJobsQuery = <
      TData = Types.LikedJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.LikedJobsQueryVariables,
      variables?: Types.LikedJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.LikedJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.LikedJobsQuery, TError, TData>(
      variables === undefined ? ['likedJobs.infinite'] : ['likedJobs.infinite', variables],
      (metaData) => fetcher<Types.LikedJobsQuery, Types.LikedJobsQueryVariables>(LikedJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteLikedJobsQuery.getKey = (variables?: Types.LikedJobsQueryVariables) => variables === undefined ? ['likedJobs.infinite'] : ['likedJobs.infinite', variables];
;

useLikedJobsQuery.fetcher = (variables?: Types.LikedJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.LikedJobsQuery, Types.LikedJobsQueryVariables>(LikedJobsDocument, variables, options);
export const ListEmployersDocument = `
    query listEmployers($after: String, $before: String, $first: Int, $fullNameContain: String, $last: Int) {
  listEmployers(
    after: $after
    before: $before
    first: $first
    fullNameContain: $fullNameContain
    last: $last
  ) {
    edges {
      cursor
    }
    nodes {
      agreedToTerms
      changePasswordRequired
      email
      firstName
      id
      intervieweesNumber
      lastName
      lastSignInAt
      paymentMethod
      permittedEvents
      phone
      scope
      scopesAreAllowedToUpdate
      status
      title
      totalUnreadMessage
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useListEmployersQuery = <
      TData = Types.ListEmployersQuery,
      TError = unknown
    >(
      variables?: Types.ListEmployersQueryVariables,
      options?: UseQueryOptions<Types.ListEmployersQuery, TError, TData>
    ) =>
    useQuery<Types.ListEmployersQuery, TError, TData>(
      variables === undefined ? ['listEmployers'] : ['listEmployers', variables],
      fetcher<Types.ListEmployersQuery, Types.ListEmployersQueryVariables>(ListEmployersDocument, variables),
      options
    );

useListEmployersQuery.getKey = (variables?: Types.ListEmployersQueryVariables) => variables === undefined ? ['listEmployers'] : ['listEmployers', variables];
;

export const useInfiniteListEmployersQuery = <
      TData = Types.ListEmployersQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.ListEmployersQueryVariables,
      variables?: Types.ListEmployersQueryVariables,
      options?: UseInfiniteQueryOptions<Types.ListEmployersQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.ListEmployersQuery, TError, TData>(
      variables === undefined ? ['listEmployers.infinite'] : ['listEmployers.infinite', variables],
      (metaData) => fetcher<Types.ListEmployersQuery, Types.ListEmployersQueryVariables>(ListEmployersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteListEmployersQuery.getKey = (variables?: Types.ListEmployersQueryVariables) => variables === undefined ? ['listEmployers.infinite'] : ['listEmployers.infinite', variables];
;

useListEmployersQuery.fetcher = (variables?: Types.ListEmployersQueryVariables, options?: RequestInit['headers']) => fetcher<Types.ListEmployersQuery, Types.ListEmployersQueryVariables>(ListEmployersDocument, variables, options);
export const MessageThreadDocument = `
    query messageThread($jobId: String!, $id: String, $objectId: String, $objectType: String) {
  messageThread(id: $id, objectId: $objectId, objectType: $objectType) {
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    clientId
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
    companyId
    id
    lastMessage
    lastTenMessages {
      createdAt
      id
      message
      objectId
      objectType
      status
    }
    lastTimestamp
    objectId
    objectType
    threadIconUrl
    unreadMessageCounter
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useMessageThreadQuery = <
      TData = Types.MessageThreadQuery,
      TError = unknown
    >(
      variables: Types.MessageThreadQueryVariables,
      options?: UseQueryOptions<Types.MessageThreadQuery, TError, TData>
    ) =>
    useQuery<Types.MessageThreadQuery, TError, TData>(
      ['messageThread', variables],
      fetcher<Types.MessageThreadQuery, Types.MessageThreadQueryVariables>(MessageThreadDocument, variables),
      options
    );

useMessageThreadQuery.getKey = (variables: Types.MessageThreadQueryVariables) => ['messageThread', variables];
;

export const useInfiniteMessageThreadQuery = <
      TData = Types.MessageThreadQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.MessageThreadQueryVariables,
      variables: Types.MessageThreadQueryVariables,
      options?: UseInfiniteQueryOptions<Types.MessageThreadQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.MessageThreadQuery, TError, TData>(
      ['messageThread.infinite', variables],
      (metaData) => fetcher<Types.MessageThreadQuery, Types.MessageThreadQueryVariables>(MessageThreadDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteMessageThreadQuery.getKey = (variables: Types.MessageThreadQueryVariables) => ['messageThread.infinite', variables];
;

useMessageThreadQuery.fetcher = (variables: Types.MessageThreadQueryVariables, options?: RequestInit['headers']) => fetcher<Types.MessageThreadQuery, Types.MessageThreadQueryVariables>(MessageThreadDocument, variables, options);
export const MessageThreadsDocument = `
    query messageThreads($jobId: String!, $filter: CompanyManagementFilter, $keywordSearch: String, $limit: Int, $offset: Int, $workerId: String) {
  messageThreads(
    filter: $filter
    keywordSearch: $keywordSearch
    limit: $limit
    offset: $offset
    workerId: $workerId
  ) {
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    clientId
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
    companyId
    id
    lastMessage
    lastTenMessages {
      createdAt
      id
      message
      objectId
      objectType
      status
    }
    lastTimestamp
    objectId
    objectType
    threadIconUrl
    unreadMessageCounter
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useMessageThreadsQuery = <
      TData = Types.MessageThreadsQuery,
      TError = unknown
    >(
      variables: Types.MessageThreadsQueryVariables,
      options?: UseQueryOptions<Types.MessageThreadsQuery, TError, TData>
    ) =>
    useQuery<Types.MessageThreadsQuery, TError, TData>(
      ['messageThreads', variables],
      fetcher<Types.MessageThreadsQuery, Types.MessageThreadsQueryVariables>(MessageThreadsDocument, variables),
      options
    );

useMessageThreadsQuery.getKey = (variables: Types.MessageThreadsQueryVariables) => ['messageThreads', variables];
;

export const useInfiniteMessageThreadsQuery = <
      TData = Types.MessageThreadsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.MessageThreadsQueryVariables,
      variables: Types.MessageThreadsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.MessageThreadsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.MessageThreadsQuery, TError, TData>(
      ['messageThreads.infinite', variables],
      (metaData) => fetcher<Types.MessageThreadsQuery, Types.MessageThreadsQueryVariables>(MessageThreadsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteMessageThreadsQuery.getKey = (variables: Types.MessageThreadsQueryVariables) => ['messageThreads.infinite', variables];
;

useMessageThreadsQuery.fetcher = (variables: Types.MessageThreadsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.MessageThreadsQuery, Types.MessageThreadsQueryVariables>(MessageThreadsDocument, variables, options);
export const MessagesDocument = `
    query messages($size: [String!]!, $filter: MessageFilter!, $keywordSearch: String, $limit: Int, $offset: Int) {
  messages(
    filter: $filter
    keywordSearch: $keywordSearch
    limit: $limit
    offset: $offset
  ) {
    attachment {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    createdAt
    id
    message
    messageThread {
      clientId
      companyId
      id
      lastMessage
      lastTimestamp
      objectId
      objectType
      threadIconUrl
      unreadMessageCounter
    }
    objectId
    objectType
    receiver {
      email
      firstName
      id
      lastName
      phone
    }
    sender {
      email
      firstName
      id
      lastName
      phone
    }
    status
  }
}
    `;
export const useMessagesQuery = <
      TData = Types.MessagesQuery,
      TError = unknown
    >(
      variables: Types.MessagesQueryVariables,
      options?: UseQueryOptions<Types.MessagesQuery, TError, TData>
    ) =>
    useQuery<Types.MessagesQuery, TError, TData>(
      ['messages', variables],
      fetcher<Types.MessagesQuery, Types.MessagesQueryVariables>(MessagesDocument, variables),
      options
    );

useMessagesQuery.getKey = (variables: Types.MessagesQueryVariables) => ['messages', variables];
;

export const useInfiniteMessagesQuery = <
      TData = Types.MessagesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.MessagesQueryVariables,
      variables: Types.MessagesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.MessagesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.MessagesQuery, TError, TData>(
      ['messages.infinite', variables],
      (metaData) => fetcher<Types.MessagesQuery, Types.MessagesQueryVariables>(MessagesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteMessagesQuery.getKey = (variables: Types.MessagesQueryVariables) => ['messages.infinite', variables];
;

useMessagesQuery.fetcher = (variables: Types.MessagesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.MessagesQuery, Types.MessagesQueryVariables>(MessagesDocument, variables, options);
export const NotificationDocument = `
    query notification($id: String!) {
  notification(id: $id) {
    createdAt
    dataEvent
    dataId
    dataType
    heading
    id
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    message
    status
    updatedAt
    url
  }
}
    `;
export const useNotificationQuery = <
      TData = Types.NotificationQuery,
      TError = unknown
    >(
      variables: Types.NotificationQueryVariables,
      options?: UseQueryOptions<Types.NotificationQuery, TError, TData>
    ) =>
    useQuery<Types.NotificationQuery, TError, TData>(
      ['notification', variables],
      fetcher<Types.NotificationQuery, Types.NotificationQueryVariables>(NotificationDocument, variables),
      options
    );

useNotificationQuery.getKey = (variables: Types.NotificationQueryVariables) => ['notification', variables];
;

export const useInfiniteNotificationQuery = <
      TData = Types.NotificationQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.NotificationQueryVariables,
      variables: Types.NotificationQueryVariables,
      options?: UseInfiniteQueryOptions<Types.NotificationQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.NotificationQuery, TError, TData>(
      ['notification.infinite', variables],
      (metaData) => fetcher<Types.NotificationQuery, Types.NotificationQueryVariables>(NotificationDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteNotificationQuery.getKey = (variables: Types.NotificationQueryVariables) => ['notification.infinite', variables];
;

useNotificationQuery.fetcher = (variables: Types.NotificationQueryVariables, options?: RequestInit['headers']) => fetcher<Types.NotificationQuery, Types.NotificationQueryVariables>(NotificationDocument, variables, options);
export const NotificationsDocument = `
    query notifications($after: String, $before: String, $events: [String!], $exceptEvents: [String!], $first: Int, $last: Int) {
  notifications(
    after: $after
    before: $before
    events: $events
    exceptEvents: $exceptEvents
    first: $first
    last: $last
  ) {
    edges {
      cursor
    }
    nodes {
      createdAt
      dataEvent
      dataId
      dataType
      heading
      id
      message
      status
      updatedAt
      url
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
    totalRead
    totalUnread
  }
}
    `;
export const useNotificationsQuery = <
      TData = Types.NotificationsQuery,
      TError = unknown
    >(
      variables?: Types.NotificationsQueryVariables,
      options?: UseQueryOptions<Types.NotificationsQuery, TError, TData>
    ) =>
    useQuery<Types.NotificationsQuery, TError, TData>(
      variables === undefined ? ['notifications'] : ['notifications', variables],
      fetcher<Types.NotificationsQuery, Types.NotificationsQueryVariables>(NotificationsDocument, variables),
      options
    );

useNotificationsQuery.getKey = (variables?: Types.NotificationsQueryVariables) => variables === undefined ? ['notifications'] : ['notifications', variables];
;

export const useInfiniteNotificationsQuery = <
      TData = Types.NotificationsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.NotificationsQueryVariables,
      variables?: Types.NotificationsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.NotificationsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.NotificationsQuery, TError, TData>(
      variables === undefined ? ['notifications.infinite'] : ['notifications.infinite', variables],
      (metaData) => fetcher<Types.NotificationsQuery, Types.NotificationsQueryVariables>(NotificationsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteNotificationsQuery.getKey = (variables?: Types.NotificationsQueryVariables) => variables === undefined ? ['notifications.infinite'] : ['notifications.infinite', variables];
;

useNotificationsQuery.fetcher = (variables?: Types.NotificationsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.NotificationsQuery, Types.NotificationsQueryVariables>(NotificationsDocument, variables, options);
export const OnboardingPartDocument = `
    query onboardingPart($id: String!) {
  onboardingPart(id: $id) {
    companyId
    companyOnboardingId
    confirmationMessage
    description
    failedMessage
    id
    integrationObject
    isEnabled
    name
    pendingMessage
    quizId
    referenceUrl
    workerOnboardingPart {
      id
      integration {
        __typename
        ... on GroupOnboardingPart {
          id
          state
        }
        ... on ProfileOnboarding {
          id
        }
        ... on UserTermsOfService {
          agreedAt
          id
        }
        ... on WorkExperienceOverview {
          discipline
          id
          primarySpecialty
          secondarySpecialty
          yearsOfExperience
        }
        ... on WorkerCertificationOverview {
          id
        }
        ... on WorkerEducationOverview {
          id
        }
        ... on WorkerReferenceOnboarding {
          id
        }
      }
      integrationConfigurations
      integrationObject
      state
      workerId
    }
  }
}
    `;
export const useOnboardingPartQuery = <
      TData = Types.OnboardingPartQuery,
      TError = unknown
    >(
      variables: Types.OnboardingPartQueryVariables,
      options?: UseQueryOptions<Types.OnboardingPartQuery, TError, TData>
    ) =>
    useQuery<Types.OnboardingPartQuery, TError, TData>(
      ['onboardingPart', variables],
      fetcher<Types.OnboardingPartQuery, Types.OnboardingPartQueryVariables>(OnboardingPartDocument, variables),
      options
    );

useOnboardingPartQuery.getKey = (variables: Types.OnboardingPartQueryVariables) => ['onboardingPart', variables];
;

export const useInfiniteOnboardingPartQuery = <
      TData = Types.OnboardingPartQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.OnboardingPartQueryVariables,
      variables: Types.OnboardingPartQueryVariables,
      options?: UseInfiniteQueryOptions<Types.OnboardingPartQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.OnboardingPartQuery, TError, TData>(
      ['onboardingPart.infinite', variables],
      (metaData) => fetcher<Types.OnboardingPartQuery, Types.OnboardingPartQueryVariables>(OnboardingPartDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteOnboardingPartQuery.getKey = (variables: Types.OnboardingPartQueryVariables) => ['onboardingPart.infinite', variables];
;

useOnboardingPartQuery.fetcher = (variables: Types.OnboardingPartQueryVariables, options?: RequestInit['headers']) => fetcher<Types.OnboardingPartQuery, Types.OnboardingPartQueryVariables>(OnboardingPartDocument, variables, options);
export const OnboardingPartsDocument = `
    query onboardingParts($companyOnboardingId: String!) {
  onboardingParts(companyOnboardingId: $companyOnboardingId) {
    companyId
    companyOnboardingId
    confirmationMessage
    description
    failedMessage
    id
    integrationObject
    isEnabled
    name
    pendingMessage
    quizId
    referenceUrl
    workerOnboardingPart {
      id
      integration {
        __typename
        ... on GroupOnboardingPart {
          id
          state
        }
        ... on ProfileOnboarding {
          id
        }
        ... on UserTermsOfService {
          agreedAt
          id
        }
        ... on WorkExperienceOverview {
          discipline
          id
          primarySpecialty
          secondarySpecialty
          yearsOfExperience
        }
        ... on WorkerCertificationOverview {
          id
        }
        ... on WorkerEducationOverview {
          id
        }
        ... on WorkerReferenceOnboarding {
          id
        }
      }
      integrationConfigurations
      integrationObject
      state
      workerId
    }
  }
}
    `;
export const useOnboardingPartsQuery = <
      TData = Types.OnboardingPartsQuery,
      TError = unknown
    >(
      variables: Types.OnboardingPartsQueryVariables,
      options?: UseQueryOptions<Types.OnboardingPartsQuery, TError, TData>
    ) =>
    useQuery<Types.OnboardingPartsQuery, TError, TData>(
      ['onboardingParts', variables],
      fetcher<Types.OnboardingPartsQuery, Types.OnboardingPartsQueryVariables>(OnboardingPartsDocument, variables),
      options
    );

useOnboardingPartsQuery.getKey = (variables: Types.OnboardingPartsQueryVariables) => ['onboardingParts', variables];
;

export const useInfiniteOnboardingPartsQuery = <
      TData = Types.OnboardingPartsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.OnboardingPartsQueryVariables,
      variables: Types.OnboardingPartsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.OnboardingPartsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.OnboardingPartsQuery, TError, TData>(
      ['onboardingParts.infinite', variables],
      (metaData) => fetcher<Types.OnboardingPartsQuery, Types.OnboardingPartsQueryVariables>(OnboardingPartsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteOnboardingPartsQuery.getKey = (variables: Types.OnboardingPartsQueryVariables) => ['onboardingParts.infinite', variables];
;

useOnboardingPartsQuery.fetcher = (variables: Types.OnboardingPartsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.OnboardingPartsQuery, Types.OnboardingPartsQueryVariables>(OnboardingPartsDocument, variables, options);
export const PaginationAppliedJobsDocument = `
    query paginationAppliedJobs($after: String, $before: String, $first: Int, $last: Int) {
  paginationAppliedJobs(
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
    }
    nodes {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const usePaginationAppliedJobsQuery = <
      TData = Types.PaginationAppliedJobsQuery,
      TError = unknown
    >(
      variables?: Types.PaginationAppliedJobsQueryVariables,
      options?: UseQueryOptions<Types.PaginationAppliedJobsQuery, TError, TData>
    ) =>
    useQuery<Types.PaginationAppliedJobsQuery, TError, TData>(
      variables === undefined ? ['paginationAppliedJobs'] : ['paginationAppliedJobs', variables],
      fetcher<Types.PaginationAppliedJobsQuery, Types.PaginationAppliedJobsQueryVariables>(PaginationAppliedJobsDocument, variables),
      options
    );

usePaginationAppliedJobsQuery.getKey = (variables?: Types.PaginationAppliedJobsQueryVariables) => variables === undefined ? ['paginationAppliedJobs'] : ['paginationAppliedJobs', variables];
;

export const useInfinitePaginationAppliedJobsQuery = <
      TData = Types.PaginationAppliedJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.PaginationAppliedJobsQueryVariables,
      variables?: Types.PaginationAppliedJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.PaginationAppliedJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.PaginationAppliedJobsQuery, TError, TData>(
      variables === undefined ? ['paginationAppliedJobs.infinite'] : ['paginationAppliedJobs.infinite', variables],
      (metaData) => fetcher<Types.PaginationAppliedJobsQuery, Types.PaginationAppliedJobsQueryVariables>(PaginationAppliedJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfinitePaginationAppliedJobsQuery.getKey = (variables?: Types.PaginationAppliedJobsQueryVariables) => variables === undefined ? ['paginationAppliedJobs.infinite'] : ['paginationAppliedJobs.infinite', variables];
;

usePaginationAppliedJobsQuery.fetcher = (variables?: Types.PaginationAppliedJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.PaginationAppliedJobsQuery, Types.PaginationAppliedJobsQueryVariables>(PaginationAppliedJobsDocument, variables, options);
export const PaymentMethodsDocument = `
    query paymentMethods($clientId: String) {
  paymentMethods(clientId: $clientId) {
    cardInfo
    id
    isDefault
  }
}
    `;
export const usePaymentMethodsQuery = <
      TData = Types.PaymentMethodsQuery,
      TError = unknown
    >(
      variables?: Types.PaymentMethodsQueryVariables,
      options?: UseQueryOptions<Types.PaymentMethodsQuery, TError, TData>
    ) =>
    useQuery<Types.PaymentMethodsQuery, TError, TData>(
      variables === undefined ? ['paymentMethods'] : ['paymentMethods', variables],
      fetcher<Types.PaymentMethodsQuery, Types.PaymentMethodsQueryVariables>(PaymentMethodsDocument, variables),
      options
    );

usePaymentMethodsQuery.getKey = (variables?: Types.PaymentMethodsQueryVariables) => variables === undefined ? ['paymentMethods'] : ['paymentMethods', variables];
;

export const useInfinitePaymentMethodsQuery = <
      TData = Types.PaymentMethodsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.PaymentMethodsQueryVariables,
      variables?: Types.PaymentMethodsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.PaymentMethodsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.PaymentMethodsQuery, TError, TData>(
      variables === undefined ? ['paymentMethods.infinite'] : ['paymentMethods.infinite', variables],
      (metaData) => fetcher<Types.PaymentMethodsQuery, Types.PaymentMethodsQueryVariables>(PaymentMethodsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfinitePaymentMethodsQuery.getKey = (variables?: Types.PaymentMethodsQueryVariables) => variables === undefined ? ['paymentMethods.infinite'] : ['paymentMethods.infinite', variables];
;

usePaymentMethodsQuery.fetcher = (variables?: Types.PaymentMethodsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.PaymentMethodsQuery, Types.PaymentMethodsQueryVariables>(PaymentMethodsDocument, variables, options);
export const PopularCitiesDocument = `
    query popularCities {
  popularCities {
    availableJobs
    avgWeeklyRate
    city
    cityImage
    highWeeklyRate
    locationImage {
      city
      id
      state
    }
    lowWeeklyRate
    state
    totalJobs
  }
}
    `;
export const usePopularCitiesQuery = <
      TData = Types.PopularCitiesQuery,
      TError = unknown
    >(
      variables?: Types.PopularCitiesQueryVariables,
      options?: UseQueryOptions<Types.PopularCitiesQuery, TError, TData>
    ) =>
    useQuery<Types.PopularCitiesQuery, TError, TData>(
      variables === undefined ? ['popularCities'] : ['popularCities', variables],
      fetcher<Types.PopularCitiesQuery, Types.PopularCitiesQueryVariables>(PopularCitiesDocument, variables),
      options
    );

usePopularCitiesQuery.getKey = (variables?: Types.PopularCitiesQueryVariables) => variables === undefined ? ['popularCities'] : ['popularCities', variables];
;

export const useInfinitePopularCitiesQuery = <
      TData = Types.PopularCitiesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.PopularCitiesQueryVariables,
      variables?: Types.PopularCitiesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.PopularCitiesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.PopularCitiesQuery, TError, TData>(
      variables === undefined ? ['popularCities.infinite'] : ['popularCities.infinite', variables],
      (metaData) => fetcher<Types.PopularCitiesQuery, Types.PopularCitiesQueryVariables>(PopularCitiesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfinitePopularCitiesQuery.getKey = (variables?: Types.PopularCitiesQueryVariables) => variables === undefined ? ['popularCities.infinite'] : ['popularCities.infinite', variables];
;

usePopularCitiesQuery.fetcher = (variables?: Types.PopularCitiesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.PopularCitiesQuery, Types.PopularCitiesQueryVariables>(PopularCitiesDocument, variables, options);
export const PopularCityJobsDocument = `
    query popularCityJobs($city: String!, $filter: JobFilter, $limit: Int, $offset: Int, $sortBy: JobManagementSort, $state: String!, $summaryRequire: Boolean) {
  popularCityJobs(
    city: $city
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
    state: $state
    summaryRequire: $summaryRequire
  ) {
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    summary {
      disciplines
    }
    totalCount
  }
}
    `;
export const usePopularCityJobsQuery = <
      TData = Types.PopularCityJobsQuery,
      TError = unknown
    >(
      variables: Types.PopularCityJobsQueryVariables,
      options?: UseQueryOptions<Types.PopularCityJobsQuery, TError, TData>
    ) =>
    useQuery<Types.PopularCityJobsQuery, TError, TData>(
      ['popularCityJobs', variables],
      fetcher<Types.PopularCityJobsQuery, Types.PopularCityJobsQueryVariables>(PopularCityJobsDocument, variables),
      options
    );

usePopularCityJobsQuery.getKey = (variables: Types.PopularCityJobsQueryVariables) => ['popularCityJobs', variables];
;

export const useInfinitePopularCityJobsQuery = <
      TData = Types.PopularCityJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.PopularCityJobsQueryVariables,
      variables: Types.PopularCityJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.PopularCityJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.PopularCityJobsQuery, TError, TData>(
      ['popularCityJobs.infinite', variables],
      (metaData) => fetcher<Types.PopularCityJobsQuery, Types.PopularCityJobsQueryVariables>(PopularCityJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfinitePopularCityJobsQuery.getKey = (variables: Types.PopularCityJobsQueryVariables) => ['popularCityJobs.infinite', variables];
;

usePopularCityJobsQuery.fetcher = (variables: Types.PopularCityJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.PopularCityJobsQuery, Types.PopularCityJobsQueryVariables>(PopularCityJobsDocument, variables, options);
export const PublicJobDocument = `
    query publicJob($id: String!) {
  publicJob(id: $id) {
    address
    address2
    applicantCount
    benefitContent
    canApply
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    complianceRequirements
    country
    createdAt
    createdDate
    customStartDate
    description
    discipline
    distance
    distanceToCurrentUserSearchLocation
    draftId
    duration
    durationType
    employerOfRecord
    exclusiveJob
    externalCreatedAt
    externalJobId
    externalUpdatedAt
    facilityType
    favoriteCount
    frequency
    hospital
    hoursPerWeek
    id
    images
    isAsap
    isBookmarked
    isDisliked
    isFavorited
    isLiked
    isSkillChecklist
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobApplicants {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobInvitations {
      createdAt
      id
      updatedAt
    }
    jobType
    latitude
    location {
      active
      address
      addressState
      city
      clientId
      companyId
      country
      distanceToCurrentUserSearchLocation
      id
      latitude
      longitude
      name
      phone
      region
      statusUpdatedAt
      zipcode
    }
    locationImage {
      city
      id
      state
    }
    longitude
    matchingPercentage
    minExpYear
    minWeeklyPayAmount
    noTalentMatches
    profileRequirements
    publishedAt
    requirementNotes
    shifts
    skillId
    skillLongName
    skillName
    slotsNumber
    slug
    specialty
    startDate
    state
    status
    templateName
    title
    topWorkerMatchingScores
    updatedAt
    viewCount
    weeklyPayAmount
    zipcode
  }
}
    `;
export const usePublicJobQuery = <
      TData = Types.PublicJobQuery,
      TError = unknown
    >(
      variables: Types.PublicJobQueryVariables,
      options?: UseQueryOptions<Types.PublicJobQuery, TError, TData>
    ) =>
    useQuery<Types.PublicJobQuery, TError, TData>(
      ['publicJob', variables],
      fetcher<Types.PublicJobQuery, Types.PublicJobQueryVariables>(PublicJobDocument, variables),
      options
    );

usePublicJobQuery.getKey = (variables: Types.PublicJobQueryVariables) => ['publicJob', variables];
;

export const useInfinitePublicJobQuery = <
      TData = Types.PublicJobQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.PublicJobQueryVariables,
      variables: Types.PublicJobQueryVariables,
      options?: UseInfiniteQueryOptions<Types.PublicJobQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.PublicJobQuery, TError, TData>(
      ['publicJob.infinite', variables],
      (metaData) => fetcher<Types.PublicJobQuery, Types.PublicJobQueryVariables>(PublicJobDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfinitePublicJobQuery.getKey = (variables: Types.PublicJobQueryVariables) => ['publicJob.infinite', variables];
;

usePublicJobQuery.fetcher = (variables: Types.PublicJobQueryVariables, options?: RequestInit['headers']) => fetcher<Types.PublicJobQuery, Types.PublicJobQueryVariables>(PublicJobDocument, variables, options);
export const QuizDocument = `
    query quiz($id: String!) {
  quiz(id: $id) {
    companyId
    description
    id
    name
    passingPercentage
    quizQuestions {
      companyId
      description
      id
      name
      question
      quizAnswersNumber
    }
    quizQuestionsNumber
  }
}
    `;
export const useQuizQuery = <
      TData = Types.QuizQuery,
      TError = unknown
    >(
      variables: Types.QuizQueryVariables,
      options?: UseQueryOptions<Types.QuizQuery, TError, TData>
    ) =>
    useQuery<Types.QuizQuery, TError, TData>(
      ['quiz', variables],
      fetcher<Types.QuizQuery, Types.QuizQueryVariables>(QuizDocument, variables),
      options
    );

useQuizQuery.getKey = (variables: Types.QuizQueryVariables) => ['quiz', variables];
;

export const useInfiniteQuizQuery = <
      TData = Types.QuizQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.QuizQueryVariables,
      variables: Types.QuizQueryVariables,
      options?: UseInfiniteQueryOptions<Types.QuizQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.QuizQuery, TError, TData>(
      ['quiz.infinite', variables],
      (metaData) => fetcher<Types.QuizQuery, Types.QuizQueryVariables>(QuizDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteQuizQuery.getKey = (variables: Types.QuizQueryVariables) => ['quiz.infinite', variables];
;

useQuizQuery.fetcher = (variables: Types.QuizQueryVariables, options?: RequestInit['headers']) => fetcher<Types.QuizQuery, Types.QuizQueryVariables>(QuizDocument, variables, options);
export const QuizzesDocument = `
    query quizzes($companyOnboardingId: String!) {
  quizzes(companyOnboardingId: $companyOnboardingId) {
    companyId
    description
    id
    name
    passingPercentage
    quizQuestions {
      companyId
      description
      id
      name
      question
      quizAnswersNumber
    }
    quizQuestionsNumber
  }
}
    `;
export const useQuizzesQuery = <
      TData = Types.QuizzesQuery,
      TError = unknown
    >(
      variables: Types.QuizzesQueryVariables,
      options?: UseQueryOptions<Types.QuizzesQuery, TError, TData>
    ) =>
    useQuery<Types.QuizzesQuery, TError, TData>(
      ['quizzes', variables],
      fetcher<Types.QuizzesQuery, Types.QuizzesQueryVariables>(QuizzesDocument, variables),
      options
    );

useQuizzesQuery.getKey = (variables: Types.QuizzesQueryVariables) => ['quizzes', variables];
;

export const useInfiniteQuizzesQuery = <
      TData = Types.QuizzesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.QuizzesQueryVariables,
      variables: Types.QuizzesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.QuizzesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.QuizzesQuery, TError, TData>(
      ['quizzes.infinite', variables],
      (metaData) => fetcher<Types.QuizzesQuery, Types.QuizzesQueryVariables>(QuizzesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteQuizzesQuery.getKey = (variables: Types.QuizzesQueryVariables) => ['quizzes.infinite', variables];
;

useQuizzesQuery.fetcher = (variables: Types.QuizzesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.QuizzesQuery, Types.QuizzesQueryVariables>(QuizzesDocument, variables, options);
export const RecruitersDocument = `
    query recruiters {
  recruiters {
    companyId
    email
    id
    name
    phone
    title
  }
}
    `;
export const useRecruitersQuery = <
      TData = Types.RecruitersQuery,
      TError = unknown
    >(
      variables?: Types.RecruitersQueryVariables,
      options?: UseQueryOptions<Types.RecruitersQuery, TError, TData>
    ) =>
    useQuery<Types.RecruitersQuery, TError, TData>(
      variables === undefined ? ['recruiters'] : ['recruiters', variables],
      fetcher<Types.RecruitersQuery, Types.RecruitersQueryVariables>(RecruitersDocument, variables),
      options
    );

useRecruitersQuery.getKey = (variables?: Types.RecruitersQueryVariables) => variables === undefined ? ['recruiters'] : ['recruiters', variables];
;

export const useInfiniteRecruitersQuery = <
      TData = Types.RecruitersQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.RecruitersQueryVariables,
      variables?: Types.RecruitersQueryVariables,
      options?: UseInfiniteQueryOptions<Types.RecruitersQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.RecruitersQuery, TError, TData>(
      variables === undefined ? ['recruiters.infinite'] : ['recruiters.infinite', variables],
      (metaData) => fetcher<Types.RecruitersQuery, Types.RecruitersQueryVariables>(RecruitersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteRecruitersQuery.getKey = (variables?: Types.RecruitersQueryVariables) => variables === undefined ? ['recruiters.infinite'] : ['recruiters.infinite', variables];
;

useRecruitersQuery.fetcher = (variables?: Types.RecruitersQueryVariables, options?: RequestInit['headers']) => fetcher<Types.RecruitersQuery, Types.RecruitersQueryVariables>(RecruitersDocument, variables, options);
export const SavedFiltersDocument = `
    query savedFilters($jobId: String!) {
  savedFilters {
    alertChannel
    alertEmail
    alertFirstName
    alertLastName
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
    companyId
    deviceId
    enableAlert
    filterCondition {
      companyId
      disciplines
      exclusiveJob
      externalId
      facilityTypes
      id
      jobTypes
      locationCities
      locationStates
      maxWage
      minMatchingPercentage
      minWage
      nearBy
      shifts
      specialties
      startDate
      workerId
    }
    frequency
    id
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    lastAlertedAt
    name
    pauseAlert
    pauseAlertPeriod
    pauseAlertUntil
    startPauseAlertDate
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerId
  }
}
    `;
export const useSavedFiltersQuery = <
      TData = Types.SavedFiltersQuery,
      TError = unknown
    >(
      variables: Types.SavedFiltersQueryVariables,
      options?: UseQueryOptions<Types.SavedFiltersQuery, TError, TData>
    ) =>
    useQuery<Types.SavedFiltersQuery, TError, TData>(
      ['savedFilters', variables],
      fetcher<Types.SavedFiltersQuery, Types.SavedFiltersQueryVariables>(SavedFiltersDocument, variables),
      options
    );

useSavedFiltersQuery.getKey = (variables: Types.SavedFiltersQueryVariables) => ['savedFilters', variables];
;

export const useInfiniteSavedFiltersQuery = <
      TData = Types.SavedFiltersQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.SavedFiltersQueryVariables,
      variables: Types.SavedFiltersQueryVariables,
      options?: UseInfiniteQueryOptions<Types.SavedFiltersQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.SavedFiltersQuery, TError, TData>(
      ['savedFilters.infinite', variables],
      (metaData) => fetcher<Types.SavedFiltersQuery, Types.SavedFiltersQueryVariables>(SavedFiltersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteSavedFiltersQuery.getKey = (variables: Types.SavedFiltersQueryVariables) => ['savedFilters.infinite', variables];
;

useSavedFiltersQuery.fetcher = (variables: Types.SavedFiltersQueryVariables, options?: RequestInit['headers']) => fetcher<Types.SavedFiltersQuery, Types.SavedFiltersQueryVariables>(SavedFiltersDocument, variables, options);
export const SignedUrlsDocument = `
    query signedUrls($size: [String!]!, $blobIds: [String!]!) {
  signedUrls(blobIds: $blobIds) {
    blobId
    contentType
    fileUrl
    filename
    id
    imageUrls(size: $size)
    thumbnails
  }
}
    `;
export const useSignedUrlsQuery = <
      TData = Types.SignedUrlsQuery,
      TError = unknown
    >(
      variables: Types.SignedUrlsQueryVariables,
      options?: UseQueryOptions<Types.SignedUrlsQuery, TError, TData>
    ) =>
    useQuery<Types.SignedUrlsQuery, TError, TData>(
      ['signedUrls', variables],
      fetcher<Types.SignedUrlsQuery, Types.SignedUrlsQueryVariables>(SignedUrlsDocument, variables),
      options
    );

useSignedUrlsQuery.getKey = (variables: Types.SignedUrlsQueryVariables) => ['signedUrls', variables];
;

export const useInfiniteSignedUrlsQuery = <
      TData = Types.SignedUrlsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.SignedUrlsQueryVariables,
      variables: Types.SignedUrlsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.SignedUrlsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.SignedUrlsQuery, TError, TData>(
      ['signedUrls.infinite', variables],
      (metaData) => fetcher<Types.SignedUrlsQuery, Types.SignedUrlsQueryVariables>(SignedUrlsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteSignedUrlsQuery.getKey = (variables: Types.SignedUrlsQueryVariables) => ['signedUrls.infinite', variables];
;

useSignedUrlsQuery.fetcher = (variables: Types.SignedUrlsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.SignedUrlsQuery, Types.SignedUrlsQueryVariables>(SignedUrlsDocument, variables, options);
export const SimilarAJobDocument = `
    query similarAJob($filter: JobFilter, $id: String!, $limit: Int, $offset: Int, $sortBy: JobManagementSort, $summaryRequire: Boolean) {
  similarAJob(
    filter: $filter
    id: $id
    limit: $limit
    offset: $offset
    sortBy: $sortBy
    summaryRequire: $summaryRequire
  ) {
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    summary {
      disciplines
    }
    totalCount
  }
}
    `;
export const useSimilarAJobQuery = <
      TData = Types.SimilarAJobQuery,
      TError = unknown
    >(
      variables: Types.SimilarAJobQueryVariables,
      options?: UseQueryOptions<Types.SimilarAJobQuery, TError, TData>
    ) =>
    useQuery<Types.SimilarAJobQuery, TError, TData>(
      ['similarAJob', variables],
      fetcher<Types.SimilarAJobQuery, Types.SimilarAJobQueryVariables>(SimilarAJobDocument, variables),
      options
    );

useSimilarAJobQuery.getKey = (variables: Types.SimilarAJobQueryVariables) => ['similarAJob', variables];
;

export const useInfiniteSimilarAJobQuery = <
      TData = Types.SimilarAJobQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.SimilarAJobQueryVariables,
      variables: Types.SimilarAJobQueryVariables,
      options?: UseInfiniteQueryOptions<Types.SimilarAJobQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.SimilarAJobQuery, TError, TData>(
      ['similarAJob.infinite', variables],
      (metaData) => fetcher<Types.SimilarAJobQuery, Types.SimilarAJobQueryVariables>(SimilarAJobDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteSimilarAJobQuery.getKey = (variables: Types.SimilarAJobQueryVariables) => ['similarAJob.infinite', variables];
;

useSimilarAJobQuery.fetcher = (variables: Types.SimilarAJobQueryVariables, options?: RequestInit['headers']) => fetcher<Types.SimilarAJobQuery, Types.SimilarAJobQueryVariables>(SimilarAJobDocument, variables, options);
export const SimilarSearchJobsDocument = `
    query similarSearchJobs($filter: JobFilter, $limit: Int, $offset: Int, $sortBy: JobManagementSort, $summaryRequire: Boolean) {
  similarSearchJobs(
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
    summaryRequire: $summaryRequire
  ) {
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    summary {
      disciplines
    }
    totalCount
  }
}
    `;
export const useSimilarSearchJobsQuery = <
      TData = Types.SimilarSearchJobsQuery,
      TError = unknown
    >(
      variables?: Types.SimilarSearchJobsQueryVariables,
      options?: UseQueryOptions<Types.SimilarSearchJobsQuery, TError, TData>
    ) =>
    useQuery<Types.SimilarSearchJobsQuery, TError, TData>(
      variables === undefined ? ['similarSearchJobs'] : ['similarSearchJobs', variables],
      fetcher<Types.SimilarSearchJobsQuery, Types.SimilarSearchJobsQueryVariables>(SimilarSearchJobsDocument, variables),
      options
    );

useSimilarSearchJobsQuery.getKey = (variables?: Types.SimilarSearchJobsQueryVariables) => variables === undefined ? ['similarSearchJobs'] : ['similarSearchJobs', variables];
;

export const useInfiniteSimilarSearchJobsQuery = <
      TData = Types.SimilarSearchJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.SimilarSearchJobsQueryVariables,
      variables?: Types.SimilarSearchJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.SimilarSearchJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.SimilarSearchJobsQuery, TError, TData>(
      variables === undefined ? ['similarSearchJobs.infinite'] : ['similarSearchJobs.infinite', variables],
      (metaData) => fetcher<Types.SimilarSearchJobsQuery, Types.SimilarSearchJobsQueryVariables>(SimilarSearchJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteSimilarSearchJobsQuery.getKey = (variables?: Types.SimilarSearchJobsQueryVariables) => variables === undefined ? ['similarSearchJobs.infinite'] : ['similarSearchJobs.infinite', variables];
;

useSimilarSearchJobsQuery.fetcher = (variables?: Types.SimilarSearchJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.SimilarSearchJobsQuery, Types.SimilarSearchJobsQueryVariables>(SimilarSearchJobsDocument, variables, options);
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
export const SuggestionJobsDocument = `
    query suggestionJobs($filter: JobFilter, $limit: Int, $offset: Int, $sortBy: JobManagementSort, $summaryRequire: Boolean) {
  suggestionJobs(
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
    summaryRequire: $summaryRequire
  ) {
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    summary {
      disciplines
    }
    totalCount
  }
}
    `;
export const useSuggestionJobsQuery = <
      TData = Types.SuggestionJobsQuery,
      TError = unknown
    >(
      variables?: Types.SuggestionJobsQueryVariables,
      options?: UseQueryOptions<Types.SuggestionJobsQuery, TError, TData>
    ) =>
    useQuery<Types.SuggestionJobsQuery, TError, TData>(
      variables === undefined ? ['suggestionJobs'] : ['suggestionJobs', variables],
      fetcher<Types.SuggestionJobsQuery, Types.SuggestionJobsQueryVariables>(SuggestionJobsDocument, variables),
      options
    );

useSuggestionJobsQuery.getKey = (variables?: Types.SuggestionJobsQueryVariables) => variables === undefined ? ['suggestionJobs'] : ['suggestionJobs', variables];
;

export const useInfiniteSuggestionJobsQuery = <
      TData = Types.SuggestionJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.SuggestionJobsQueryVariables,
      variables?: Types.SuggestionJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.SuggestionJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.SuggestionJobsQuery, TError, TData>(
      variables === undefined ? ['suggestionJobs.infinite'] : ['suggestionJobs.infinite', variables],
      (metaData) => fetcher<Types.SuggestionJobsQuery, Types.SuggestionJobsQueryVariables>(SuggestionJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteSuggestionJobsQuery.getKey = (variables?: Types.SuggestionJobsQueryVariables) => variables === undefined ? ['suggestionJobs.infinite'] : ['suggestionJobs.infinite', variables];
;

useSuggestionJobsQuery.fetcher = (variables?: Types.SuggestionJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.SuggestionJobsQuery, Types.SuggestionJobsQueryVariables>(SuggestionJobsDocument, variables, options);
export const SupportDocumentsDocument = `
    query supportDocuments($size: [String!]!, $jobId: String!) {
  supportDocuments {
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
    document {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    documentType
    id
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useSupportDocumentsQuery = <
      TData = Types.SupportDocumentsQuery,
      TError = unknown
    >(
      variables: Types.SupportDocumentsQueryVariables,
      options?: UseQueryOptions<Types.SupportDocumentsQuery, TError, TData>
    ) =>
    useQuery<Types.SupportDocumentsQuery, TError, TData>(
      ['supportDocuments', variables],
      fetcher<Types.SupportDocumentsQuery, Types.SupportDocumentsQueryVariables>(SupportDocumentsDocument, variables),
      options
    );

useSupportDocumentsQuery.getKey = (variables: Types.SupportDocumentsQueryVariables) => ['supportDocuments', variables];
;

export const useInfiniteSupportDocumentsQuery = <
      TData = Types.SupportDocumentsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.SupportDocumentsQueryVariables,
      variables: Types.SupportDocumentsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.SupportDocumentsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.SupportDocumentsQuery, TError, TData>(
      ['supportDocuments.infinite', variables],
      (metaData) => fetcher<Types.SupportDocumentsQuery, Types.SupportDocumentsQueryVariables>(SupportDocumentsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteSupportDocumentsQuery.getKey = (variables: Types.SupportDocumentsQueryVariables) => ['supportDocuments.infinite', variables];
;

useSupportDocumentsQuery.fetcher = (variables: Types.SupportDocumentsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.SupportDocumentsQuery, Types.SupportDocumentsQueryVariables>(SupportDocumentsDocument, variables, options);
export const TrendingJobsDocument = `
    query trendingJobs($filter: JobFilter, $limit: Int, $offset: Int, $sortBy: JobManagementSort, $summaryRequire: Boolean) {
  trendingJobs(
    filter: $filter
    limit: $limit
    offset: $offset
    sortBy: $sortBy
    summaryRequire: $summaryRequire
  ) {
    jobs {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    summary {
      disciplines
    }
    totalCount
  }
}
    `;
export const useTrendingJobsQuery = <
      TData = Types.TrendingJobsQuery,
      TError = unknown
    >(
      variables?: Types.TrendingJobsQueryVariables,
      options?: UseQueryOptions<Types.TrendingJobsQuery, TError, TData>
    ) =>
    useQuery<Types.TrendingJobsQuery, TError, TData>(
      variables === undefined ? ['trendingJobs'] : ['trendingJobs', variables],
      fetcher<Types.TrendingJobsQuery, Types.TrendingJobsQueryVariables>(TrendingJobsDocument, variables),
      options
    );

useTrendingJobsQuery.getKey = (variables?: Types.TrendingJobsQueryVariables) => variables === undefined ? ['trendingJobs'] : ['trendingJobs', variables];
;

export const useInfiniteTrendingJobsQuery = <
      TData = Types.TrendingJobsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.TrendingJobsQueryVariables,
      variables?: Types.TrendingJobsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.TrendingJobsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.TrendingJobsQuery, TError, TData>(
      variables === undefined ? ['trendingJobs.infinite'] : ['trendingJobs.infinite', variables],
      (metaData) => fetcher<Types.TrendingJobsQuery, Types.TrendingJobsQueryVariables>(TrendingJobsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteTrendingJobsQuery.getKey = (variables?: Types.TrendingJobsQueryVariables) => variables === undefined ? ['trendingJobs.infinite'] : ['trendingJobs.infinite', variables];
;

useTrendingJobsQuery.fetcher = (variables?: Types.TrendingJobsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.TrendingJobsQuery, Types.TrendingJobsQueryVariables>(TrendingJobsDocument, variables, options);
export const WorkedTimecardsDocument = `
    query workedTimecards($size: [String!]!, $after: String, $before: String, $first: Int, $last: Int) {
  workedTimecards(after: $after, before: $before, first: $first, last: $last) {
    edges {
      cursor
    }
    nodes {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
    }
    totalCount
  }
}
    `;
export const useWorkedTimecardsQuery = <
      TData = Types.WorkedTimecardsQuery,
      TError = unknown
    >(
      variables: Types.WorkedTimecardsQueryVariables,
      options?: UseQueryOptions<Types.WorkedTimecardsQuery, TError, TData>
    ) =>
    useQuery<Types.WorkedTimecardsQuery, TError, TData>(
      ['workedTimecards', variables],
      fetcher<Types.WorkedTimecardsQuery, Types.WorkedTimecardsQueryVariables>(WorkedTimecardsDocument, variables),
      options
    );

useWorkedTimecardsQuery.getKey = (variables: Types.WorkedTimecardsQueryVariables) => ['workedTimecards', variables];
;

export const useInfiniteWorkedTimecardsQuery = <
      TData = Types.WorkedTimecardsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkedTimecardsQueryVariables,
      variables: Types.WorkedTimecardsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkedTimecardsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkedTimecardsQuery, TError, TData>(
      ['workedTimecards.infinite', variables],
      (metaData) => fetcher<Types.WorkedTimecardsQuery, Types.WorkedTimecardsQueryVariables>(WorkedTimecardsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkedTimecardsQuery.getKey = (variables: Types.WorkedTimecardsQueryVariables) => ['workedTimecards.infinite', variables];
;

useWorkedTimecardsQuery.fetcher = (variables: Types.WorkedTimecardsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkedTimecardsQuery, Types.WorkedTimecardsQueryVariables>(WorkedTimecardsDocument, variables, options);
export const WorkedTimesheetDocument = `
    query workedTimesheet($id: String!) {
  workedTimesheet(id: $id) {
    callHours
    id
    paidHours
    shiftsWorked
    status
    weekManagement {
      active
      endDate
      id
      startDate
    }
  }
}
    `;
export const useWorkedTimesheetQuery = <
      TData = Types.WorkedTimesheetQuery,
      TError = unknown
    >(
      variables: Types.WorkedTimesheetQueryVariables,
      options?: UseQueryOptions<Types.WorkedTimesheetQuery, TError, TData>
    ) =>
    useQuery<Types.WorkedTimesheetQuery, TError, TData>(
      ['workedTimesheet', variables],
      fetcher<Types.WorkedTimesheetQuery, Types.WorkedTimesheetQueryVariables>(WorkedTimesheetDocument, variables),
      options
    );

useWorkedTimesheetQuery.getKey = (variables: Types.WorkedTimesheetQueryVariables) => ['workedTimesheet', variables];
;

export const useInfiniteWorkedTimesheetQuery = <
      TData = Types.WorkedTimesheetQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkedTimesheetQueryVariables,
      variables: Types.WorkedTimesheetQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkedTimesheetQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkedTimesheetQuery, TError, TData>(
      ['workedTimesheet.infinite', variables],
      (metaData) => fetcher<Types.WorkedTimesheetQuery, Types.WorkedTimesheetQueryVariables>(WorkedTimesheetDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkedTimesheetQuery.getKey = (variables: Types.WorkedTimesheetQueryVariables) => ['workedTimesheet.infinite', variables];
;

useWorkedTimesheetQuery.fetcher = (variables: Types.WorkedTimesheetQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkedTimesheetQuery, Types.WorkedTimesheetQueryVariables>(WorkedTimesheetDocument, variables, options);
export const WorkedTimesheetHistoriesDocument = `
    query workedTimesheetHistories {
  workedTimesheetHistories {
    callHours
    id
    paidHours
    shiftsWorked
    status
    weekManagement {
      active
      endDate
      id
      startDate
    }
  }
}
    `;
export const useWorkedTimesheetHistoriesQuery = <
      TData = Types.WorkedTimesheetHistoriesQuery,
      TError = unknown
    >(
      variables?: Types.WorkedTimesheetHistoriesQueryVariables,
      options?: UseQueryOptions<Types.WorkedTimesheetHistoriesQuery, TError, TData>
    ) =>
    useQuery<Types.WorkedTimesheetHistoriesQuery, TError, TData>(
      variables === undefined ? ['workedTimesheetHistories'] : ['workedTimesheetHistories', variables],
      fetcher<Types.WorkedTimesheetHistoriesQuery, Types.WorkedTimesheetHistoriesQueryVariables>(WorkedTimesheetHistoriesDocument, variables),
      options
    );

useWorkedTimesheetHistoriesQuery.getKey = (variables?: Types.WorkedTimesheetHistoriesQueryVariables) => variables === undefined ? ['workedTimesheetHistories'] : ['workedTimesheetHistories', variables];
;

export const useInfiniteWorkedTimesheetHistoriesQuery = <
      TData = Types.WorkedTimesheetHistoriesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkedTimesheetHistoriesQueryVariables,
      variables?: Types.WorkedTimesheetHistoriesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkedTimesheetHistoriesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkedTimesheetHistoriesQuery, TError, TData>(
      variables === undefined ? ['workedTimesheetHistories.infinite'] : ['workedTimesheetHistories.infinite', variables],
      (metaData) => fetcher<Types.WorkedTimesheetHistoriesQuery, Types.WorkedTimesheetHistoriesQueryVariables>(WorkedTimesheetHistoriesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkedTimesheetHistoriesQuery.getKey = (variables?: Types.WorkedTimesheetHistoriesQueryVariables) => variables === undefined ? ['workedTimesheetHistories.infinite'] : ['workedTimesheetHistories.infinite', variables];
;

useWorkedTimesheetHistoriesQuery.fetcher = (variables?: Types.WorkedTimesheetHistoriesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkedTimesheetHistoriesQuery, Types.WorkedTimesheetHistoriesQueryVariables>(WorkedTimesheetHistoriesDocument, variables, options);
export const WorkerDocument = `
    query worker($size: [String!]!, $jobId: String!, $size1: [String!]!, $id: String!) {
  worker(id: $id) {
    agreedToTerms
    availableStartDate
    avatar {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    avatarUrl
    blocked
    blockedClient {
      note
    }
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
    dateOfBirth
    email
    emergencyContact {
      contactName
      contactPhone
      contactRelationship
      id
      workerId
    }
    employmentType
    facilityTypes
    firstName
    hasActiveAssignment
    id
    isFavorited
    jobCategoriesWorkedNumber
    jobMatchingScore(jobId: $jobId)
    lastName
    lastOtpExpiredAt
    lastSignInAt
    locationsWorkedNumber
    maidenName
    noCall
    noEmail
    noNotification
    noSms
    noTalentMatches
    notificationSetting {
      assignmentEndingReminder
      completeOnboarding
      documentExpired
      id
      interviewInvitationExpired
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
    profilePercentageCompleted
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
    remainingExpirationTime
    resumes {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size1)
      thumbnails
    }
    shiftRequested
    socialSecurityNumber
    supportDocuments {
      documentType
      id
    }
    timeOffRequested
    totalUnreadMessage
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
    workerCertifications {
      certificationType
      compactLicense
      createdAt
      expirationDate
      id
      licenseDiscipline
      licenseNumber
      licenseState
      title
    }
    workerEducations {
      city
      country
      createdAt
      degreeDate
      degreeName
      id
      major
      schoolName
      state
    }
    workerNotes {
      id
      note
      noteType
    }
    workerOnboardings {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
    workerReferences {
      city
      contactEmail
      contactFirstName
      contactFullName
      contactLastName
      contactPhone
      createdAt
      facilityName
      id
      jobTitle
      refType
      relationship
      salutation
      state
      workedFrom
      workedTo
    }
    workerSpecialties {
      category
      completedChecklist
      id
      isExpired
      isPrimary
      specialty
      specialtyId
      specialtyLongName
      status
    }
    workingAuthorization {
      dateOfBirth
      id
      idPhotoUrl
      legalRightToWork
      socialSecurityNumber
      workerId
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
      variables: Types.WorkerQueryVariables,
      options?: UseQueryOptions<Types.WorkerQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerQuery, TError, TData>(
      ['worker', variables],
      fetcher<Types.WorkerQuery, Types.WorkerQueryVariables>(WorkerDocument, variables),
      options
    );

useWorkerQuery.getKey = (variables: Types.WorkerQueryVariables) => ['worker', variables];
;

export const useInfiniteWorkerQuery = <
      TData = Types.WorkerQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerQueryVariables,
      variables: Types.WorkerQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerQuery, TError, TData>(
      ['worker.infinite', variables],
      (metaData) => fetcher<Types.WorkerQuery, Types.WorkerQueryVariables>(WorkerDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerQuery.getKey = (variables: Types.WorkerQueryVariables) => ['worker.infinite', variables];
;

useWorkerQuery.fetcher = (variables: Types.WorkerQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerQuery, Types.WorkerQueryVariables>(WorkerDocument, variables, options);
export const WorkerAssignmentDocument = `
    query workerAssignment($jobId: String!, $id: String) {
  workerAssignment(id: $id) {
    address
    address2
    availableToExtend
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkWeek {
      active
      endDate
      id
      startDate
    }
    discipline
    duration
    durationType
    endDate
    frequency
    id
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    payAmount
    previousWorkWeek {
      active
      endDate
      id
      startDate
    }
    shifts
    specialty
    startDate
    state
    status
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    zipcode
  }
}
    `;
export const useWorkerAssignmentQuery = <
      TData = Types.WorkerAssignmentQuery,
      TError = unknown
    >(
      variables: Types.WorkerAssignmentQueryVariables,
      options?: UseQueryOptions<Types.WorkerAssignmentQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerAssignmentQuery, TError, TData>(
      ['workerAssignment', variables],
      fetcher<Types.WorkerAssignmentQuery, Types.WorkerAssignmentQueryVariables>(WorkerAssignmentDocument, variables),
      options
    );

useWorkerAssignmentQuery.getKey = (variables: Types.WorkerAssignmentQueryVariables) => ['workerAssignment', variables];
;

export const useInfiniteWorkerAssignmentQuery = <
      TData = Types.WorkerAssignmentQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerAssignmentQueryVariables,
      variables: Types.WorkerAssignmentQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerAssignmentQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerAssignmentQuery, TError, TData>(
      ['workerAssignment.infinite', variables],
      (metaData) => fetcher<Types.WorkerAssignmentQuery, Types.WorkerAssignmentQueryVariables>(WorkerAssignmentDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerAssignmentQuery.getKey = (variables: Types.WorkerAssignmentQueryVariables) => ['workerAssignment.infinite', variables];
;

useWorkerAssignmentQuery.fetcher = (variables: Types.WorkerAssignmentQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerAssignmentQuery, Types.WorkerAssignmentQueryVariables>(WorkerAssignmentDocument, variables, options);
export const WorkerAssignmentsDocument = `
    query workerAssignments($jobId: String!, $limit: Int, $offset: Int) {
  workerAssignments(limit: $limit, offset: $offset) {
    address
    address2
    availableToExtend
    city
    client {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    country
    createdAt
    currentWorkWeek {
      active
      endDate
      id
      startDate
    }
    discipline
    duration
    durationType
    endDate
    frequency
    id
    job {
      address
      address2
      applicantCount
      benefitContent
      canApply
      city
      complianceRequirements
      country
      createdAt
      createdDate
      customStartDate
      description
      discipline
      distance
      distanceToCurrentUserSearchLocation
      draftId
      duration
      durationType
      employerOfRecord
      exclusiveJob
      externalCreatedAt
      externalJobId
      externalUpdatedAt
      facilityType
      favoriteCount
      frequency
      hospital
      hoursPerWeek
      id
      images
      isAsap
      isBookmarked
      isDisliked
      isFavorited
      isLiked
      isSkillChecklist
      jobType
      latitude
      longitude
      matchingPercentage
      minExpYear
      minWeeklyPayAmount
      noTalentMatches
      profileRequirements
      publishedAt
      requirementNotes
      shifts
      skillId
      skillLongName
      skillName
      slotsNumber
      slug
      specialty
      startDate
      state
      status
      templateName
      title
      topWorkerMatchingScores
      updatedAt
      viewCount
      weeklyPayAmount
      zipcode
    }
    jobApplicant {
      address
      address2
      applicationProcess
      applyDate
      city
      country
      createdAt
      discipline
      duration
      durationType
      employerNote
      frequency
      id
      isDirectOffer
      jobTitle
      latitude
      longitude
      minPayAmount
      note
      offerDate
      payAmount
      shifts
      source
      specialty
      startDate
      startedStatus
      startedStatusName
      state
      status
      statusName
      statusUpdatedAt
      timeOffEndDate
      timeOffStartDate
      updateEvents
      updatedAt
      zipcode
    }
    jobTitle
    latitude
    longitude
    minPayAmount
    payAmount
    previousWorkWeek {
      active
      endDate
      id
      startDate
    }
    shifts
    specialty
    startDate
    state
    status
    updatedAt
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    zipcode
  }
}
    `;
export const useWorkerAssignmentsQuery = <
      TData = Types.WorkerAssignmentsQuery,
      TError = unknown
    >(
      variables: Types.WorkerAssignmentsQueryVariables,
      options?: UseQueryOptions<Types.WorkerAssignmentsQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerAssignmentsQuery, TError, TData>(
      ['workerAssignments', variables],
      fetcher<Types.WorkerAssignmentsQuery, Types.WorkerAssignmentsQueryVariables>(WorkerAssignmentsDocument, variables),
      options
    );

useWorkerAssignmentsQuery.getKey = (variables: Types.WorkerAssignmentsQueryVariables) => ['workerAssignments', variables];
;

export const useInfiniteWorkerAssignmentsQuery = <
      TData = Types.WorkerAssignmentsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerAssignmentsQueryVariables,
      variables: Types.WorkerAssignmentsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerAssignmentsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerAssignmentsQuery, TError, TData>(
      ['workerAssignments.infinite', variables],
      (metaData) => fetcher<Types.WorkerAssignmentsQuery, Types.WorkerAssignmentsQueryVariables>(WorkerAssignmentsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerAssignmentsQuery.getKey = (variables: Types.WorkerAssignmentsQueryVariables) => ['workerAssignments.infinite', variables];
;

useWorkerAssignmentsQuery.fetcher = (variables: Types.WorkerAssignmentsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerAssignmentsQuery, Types.WorkerAssignmentsQueryVariables>(WorkerAssignmentsDocument, variables, options);
export const WorkerBlocksDocument = `
    query workerBlocks($workerId: String!) {
  workerBlocks(workerId: $workerId) {
    blockedByClients {
      address1
      address2
      city
      contactEmail
      contactFirstName
      contactLastName
      contactName
      contactPhone
      country
      description
      ein
      id
      latitude
      longitude
      name
      phone
      state
      status
      taxId
      url
      verifiedAt
      verifyStatus
      zipCode
    }
    blockedByCompany
    note
  }
}
    `;
export const useWorkerBlocksQuery = <
      TData = Types.WorkerBlocksQuery,
      TError = unknown
    >(
      variables: Types.WorkerBlocksQueryVariables,
      options?: UseQueryOptions<Types.WorkerBlocksQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerBlocksQuery, TError, TData>(
      ['workerBlocks', variables],
      fetcher<Types.WorkerBlocksQuery, Types.WorkerBlocksQueryVariables>(WorkerBlocksDocument, variables),
      options
    );

useWorkerBlocksQuery.getKey = (variables: Types.WorkerBlocksQueryVariables) => ['workerBlocks', variables];
;

export const useInfiniteWorkerBlocksQuery = <
      TData = Types.WorkerBlocksQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerBlocksQueryVariables,
      variables: Types.WorkerBlocksQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerBlocksQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerBlocksQuery, TError, TData>(
      ['workerBlocks.infinite', variables],
      (metaData) => fetcher<Types.WorkerBlocksQuery, Types.WorkerBlocksQueryVariables>(WorkerBlocksDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerBlocksQuery.getKey = (variables: Types.WorkerBlocksQueryVariables) => ['workerBlocks.infinite', variables];
;

useWorkerBlocksQuery.fetcher = (variables: Types.WorkerBlocksQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerBlocksQuery, Types.WorkerBlocksQueryVariables>(WorkerBlocksDocument, variables, options);
export const WorkerCertificationOverviewDocument = `
    query workerCertificationOverview($id: String!) {
  workerCertificationOverview(id: $id) {
    id
    workerCertifications {
      certificationType
      compactLicense
      createdAt
      expirationDate
      id
      licenseDiscipline
      licenseNumber
      licenseState
      title
    }
  }
}
    `;
export const useWorkerCertificationOverviewQuery = <
      TData = Types.WorkerCertificationOverviewQuery,
      TError = unknown
    >(
      variables: Types.WorkerCertificationOverviewQueryVariables,
      options?: UseQueryOptions<Types.WorkerCertificationOverviewQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerCertificationOverviewQuery, TError, TData>(
      ['workerCertificationOverview', variables],
      fetcher<Types.WorkerCertificationOverviewQuery, Types.WorkerCertificationOverviewQueryVariables>(WorkerCertificationOverviewDocument, variables),
      options
    );

useWorkerCertificationOverviewQuery.getKey = (variables: Types.WorkerCertificationOverviewQueryVariables) => ['workerCertificationOverview', variables];
;

export const useInfiniteWorkerCertificationOverviewQuery = <
      TData = Types.WorkerCertificationOverviewQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerCertificationOverviewQueryVariables,
      variables: Types.WorkerCertificationOverviewQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerCertificationOverviewQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerCertificationOverviewQuery, TError, TData>(
      ['workerCertificationOverview.infinite', variables],
      (metaData) => fetcher<Types.WorkerCertificationOverviewQuery, Types.WorkerCertificationOverviewQueryVariables>(WorkerCertificationOverviewDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerCertificationOverviewQuery.getKey = (variables: Types.WorkerCertificationOverviewQueryVariables) => ['workerCertificationOverview.infinite', variables];
;

useWorkerCertificationOverviewQuery.fetcher = (variables: Types.WorkerCertificationOverviewQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerCertificationOverviewQuery, Types.WorkerCertificationOverviewQueryVariables>(WorkerCertificationOverviewDocument, variables, options);
export const WorkerCertificationsDocument = `
    query workerCertifications($size: [String!]!, $jobId: String!, $workerId: String!) {
  workerCertifications(workerId: $workerId) {
    certificationType
    compactLicense
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
    createdAt
    expirationDate
    id
    licenseDiscipline
    licenseImages {
      blobId
      contentType
      fileUrl
      filename
      id
      imageUrls(size: $size)
      thumbnails
    }
    licenseNumber
    licenseState
    title
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useWorkerCertificationsQuery = <
      TData = Types.WorkerCertificationsQuery,
      TError = unknown
    >(
      variables: Types.WorkerCertificationsQueryVariables,
      options?: UseQueryOptions<Types.WorkerCertificationsQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerCertificationsQuery, TError, TData>(
      ['workerCertifications', variables],
      fetcher<Types.WorkerCertificationsQuery, Types.WorkerCertificationsQueryVariables>(WorkerCertificationsDocument, variables),
      options
    );

useWorkerCertificationsQuery.getKey = (variables: Types.WorkerCertificationsQueryVariables) => ['workerCertifications', variables];
;

export const useInfiniteWorkerCertificationsQuery = <
      TData = Types.WorkerCertificationsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerCertificationsQueryVariables,
      variables: Types.WorkerCertificationsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerCertificationsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerCertificationsQuery, TError, TData>(
      ['workerCertifications.infinite', variables],
      (metaData) => fetcher<Types.WorkerCertificationsQuery, Types.WorkerCertificationsQueryVariables>(WorkerCertificationsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerCertificationsQuery.getKey = (variables: Types.WorkerCertificationsQueryVariables) => ['workerCertifications.infinite', variables];
;

useWorkerCertificationsQuery.fetcher = (variables: Types.WorkerCertificationsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerCertificationsQuery, Types.WorkerCertificationsQueryVariables>(WorkerCertificationsDocument, variables, options);
export const WorkerEducationOverviewDocument = `
    query workerEducationOverview($id: String!) {
  workerEducationOverview(id: $id) {
    id
    workerEducations {
      city
      country
      createdAt
      degreeDate
      degreeName
      id
      major
      schoolName
      state
    }
  }
}
    `;
export const useWorkerEducationOverviewQuery = <
      TData = Types.WorkerEducationOverviewQuery,
      TError = unknown
    >(
      variables: Types.WorkerEducationOverviewQueryVariables,
      options?: UseQueryOptions<Types.WorkerEducationOverviewQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerEducationOverviewQuery, TError, TData>(
      ['workerEducationOverview', variables],
      fetcher<Types.WorkerEducationOverviewQuery, Types.WorkerEducationOverviewQueryVariables>(WorkerEducationOverviewDocument, variables),
      options
    );

useWorkerEducationOverviewQuery.getKey = (variables: Types.WorkerEducationOverviewQueryVariables) => ['workerEducationOverview', variables];
;

export const useInfiniteWorkerEducationOverviewQuery = <
      TData = Types.WorkerEducationOverviewQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerEducationOverviewQueryVariables,
      variables: Types.WorkerEducationOverviewQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerEducationOverviewQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerEducationOverviewQuery, TError, TData>(
      ['workerEducationOverview.infinite', variables],
      (metaData) => fetcher<Types.WorkerEducationOverviewQuery, Types.WorkerEducationOverviewQueryVariables>(WorkerEducationOverviewDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerEducationOverviewQuery.getKey = (variables: Types.WorkerEducationOverviewQueryVariables) => ['workerEducationOverview.infinite', variables];
;

useWorkerEducationOverviewQuery.fetcher = (variables: Types.WorkerEducationOverviewQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerEducationOverviewQuery, Types.WorkerEducationOverviewQueryVariables>(WorkerEducationOverviewDocument, variables, options);
export const WorkerEducationsDocument = `
    query workerEducations($jobId: String!) {
  workerEducations {
    city
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
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useWorkerEducationsQuery = <
      TData = Types.WorkerEducationsQuery,
      TError = unknown
    >(
      variables: Types.WorkerEducationsQueryVariables,
      options?: UseQueryOptions<Types.WorkerEducationsQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerEducationsQuery, TError, TData>(
      ['workerEducations', variables],
      fetcher<Types.WorkerEducationsQuery, Types.WorkerEducationsQueryVariables>(WorkerEducationsDocument, variables),
      options
    );

useWorkerEducationsQuery.getKey = (variables: Types.WorkerEducationsQueryVariables) => ['workerEducations', variables];
;

export const useInfiniteWorkerEducationsQuery = <
      TData = Types.WorkerEducationsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerEducationsQueryVariables,
      variables: Types.WorkerEducationsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerEducationsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerEducationsQuery, TError, TData>(
      ['workerEducations.infinite', variables],
      (metaData) => fetcher<Types.WorkerEducationsQuery, Types.WorkerEducationsQueryVariables>(WorkerEducationsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerEducationsQuery.getKey = (variables: Types.WorkerEducationsQueryVariables) => ['workerEducations.infinite', variables];
;

useWorkerEducationsQuery.fetcher = (variables: Types.WorkerEducationsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerEducationsQuery, Types.WorkerEducationsQueryVariables>(WorkerEducationsDocument, variables, options);
export const WorkerOnboardingDocument = `
    query workerOnboarding($jobId: String!, $id: String) {
  workerOnboarding(id: $id) {
    companyOnboardingId
    currentPartIndex
    id
    message
    numOfCompletedSteps
    pendingWorkerOnboardingPart {
      id
      integration {
        __typename
        ... on GroupOnboardingPart {
          id
          state
        }
        ... on ProfileOnboarding {
          id
        }
        ... on UserTermsOfService {
          agreedAt
          id
        }
        ... on WorkExperienceOverview {
          discipline
          id
          primarySpecialty
          secondarySpecialty
          yearsOfExperience
        }
        ... on WorkerCertificationOverview {
          id
        }
        ... on WorkerEducationOverview {
          id
        }
        ... on WorkerReferenceOnboarding {
          id
        }
      }
      integrationConfigurations
      integrationObject
      state
      workerId
    }
    percentageCompleted
    permittedEvents
    state
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useWorkerOnboardingQuery = <
      TData = Types.WorkerOnboardingQuery,
      TError = unknown
    >(
      variables: Types.WorkerOnboardingQueryVariables,
      options?: UseQueryOptions<Types.WorkerOnboardingQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerOnboardingQuery, TError, TData>(
      ['workerOnboarding', variables],
      fetcher<Types.WorkerOnboardingQuery, Types.WorkerOnboardingQueryVariables>(WorkerOnboardingDocument, variables),
      options
    );

useWorkerOnboardingQuery.getKey = (variables: Types.WorkerOnboardingQueryVariables) => ['workerOnboarding', variables];
;

export const useInfiniteWorkerOnboardingQuery = <
      TData = Types.WorkerOnboardingQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerOnboardingQueryVariables,
      variables: Types.WorkerOnboardingQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerOnboardingQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerOnboardingQuery, TError, TData>(
      ['workerOnboarding.infinite', variables],
      (metaData) => fetcher<Types.WorkerOnboardingQuery, Types.WorkerOnboardingQueryVariables>(WorkerOnboardingDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerOnboardingQuery.getKey = (variables: Types.WorkerOnboardingQueryVariables) => ['workerOnboarding.infinite', variables];
;

useWorkerOnboardingQuery.fetcher = (variables: Types.WorkerOnboardingQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerOnboardingQuery, Types.WorkerOnboardingQueryVariables>(WorkerOnboardingDocument, variables, options);
export const WorkerOnboardingOverviewDocument = `
    query workerOnboardingOverview($jobId: String!) {
  workerOnboardingOverview {
    companyOnboarding {
      companyId
      description
      id
      name
      onboardingPartsNumber
      referenceUrl
    }
    completedMessage
    id
    message
    onboardingParts {
      companyId
      companyOnboardingId
      confirmationMessage
      description
      failedMessage
      id
      integrationObject
      isEnabled
      name
      pendingMessage
      quizId
      referenceUrl
    }
    percentageCompleted
    state
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useWorkerOnboardingOverviewQuery = <
      TData = Types.WorkerOnboardingOverviewQuery,
      TError = unknown
    >(
      variables: Types.WorkerOnboardingOverviewQueryVariables,
      options?: UseQueryOptions<Types.WorkerOnboardingOverviewQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerOnboardingOverviewQuery, TError, TData>(
      ['workerOnboardingOverview', variables],
      fetcher<Types.WorkerOnboardingOverviewQuery, Types.WorkerOnboardingOverviewQueryVariables>(WorkerOnboardingOverviewDocument, variables),
      options
    );

useWorkerOnboardingOverviewQuery.getKey = (variables: Types.WorkerOnboardingOverviewQueryVariables) => ['workerOnboardingOverview', variables];
;

export const useInfiniteWorkerOnboardingOverviewQuery = <
      TData = Types.WorkerOnboardingOverviewQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerOnboardingOverviewQueryVariables,
      variables: Types.WorkerOnboardingOverviewQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerOnboardingOverviewQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerOnboardingOverviewQuery, TError, TData>(
      ['workerOnboardingOverview.infinite', variables],
      (metaData) => fetcher<Types.WorkerOnboardingOverviewQuery, Types.WorkerOnboardingOverviewQueryVariables>(WorkerOnboardingOverviewDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerOnboardingOverviewQuery.getKey = (variables: Types.WorkerOnboardingOverviewQueryVariables) => ['workerOnboardingOverview.infinite', variables];
;

useWorkerOnboardingOverviewQuery.fetcher = (variables: Types.WorkerOnboardingOverviewQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerOnboardingOverviewQuery, Types.WorkerOnboardingOverviewQueryVariables>(WorkerOnboardingOverviewDocument, variables, options);
export const WorkerOnboardingPartDocument = `
    query workerOnboardingPart($jobId: String!, $jobId1: String!, $jobId2: String!, $id: String!) {
  workerOnboardingPart(id: $id) {
    id
    integration {
      __typename
      ... on GroupOnboardingPart {
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
        id
        state
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
      }
      ... on ProfileOnboarding {
        id
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId1)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
      }
      ... on UserTermsOfService {
        agreedAt
        id
        termsOfService {
          id
          url
          version
        }
      }
      ... on WorkExperienceOverview {
        discipline
        id
        primarySpecialty
        secondarySpecialty
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
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId2)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
        yearsOfExperience
      }
      ... on WorkerCertificationOverview {
        id
        workerCertifications {
          certificationType
          compactLicense
          createdAt
          expirationDate
          id
          licenseDiscipline
          licenseNumber
          licenseState
          title
        }
      }
      ... on WorkerEducationOverview {
        id
        workerEducations {
          city
          country
          createdAt
          degreeDate
          degreeName
          id
          major
          schoolName
          state
        }
      }
      ... on WorkerReferenceOnboarding {
        id
        workerReferences {
          city
          contactEmail
          contactFirstName
          contactFullName
          contactLastName
          contactPhone
          createdAt
          facilityName
          id
          jobTitle
          refType
          relationship
          salutation
          state
          workedFrom
          workedTo
        }
      }
    }
    integrationConfigurations
    integrationObject
    onboardingPart {
      companyId
      companyOnboardingId
      confirmationMessage
      description
      failedMessage
      id
      integrationObject
      isEnabled
      name
      pendingMessage
      quizId
      referenceUrl
    }
    state
    workerId
    workerOnboarding {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
  }
}
    `;
export const useWorkerOnboardingPartQuery = <
      TData = Types.WorkerOnboardingPartQuery,
      TError = unknown
    >(
      variables: Types.WorkerOnboardingPartQueryVariables,
      options?: UseQueryOptions<Types.WorkerOnboardingPartQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerOnboardingPartQuery, TError, TData>(
      ['workerOnboardingPart', variables],
      fetcher<Types.WorkerOnboardingPartQuery, Types.WorkerOnboardingPartQueryVariables>(WorkerOnboardingPartDocument, variables),
      options
    );

useWorkerOnboardingPartQuery.getKey = (variables: Types.WorkerOnboardingPartQueryVariables) => ['workerOnboardingPart', variables];
;

export const useInfiniteWorkerOnboardingPartQuery = <
      TData = Types.WorkerOnboardingPartQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerOnboardingPartQueryVariables,
      variables: Types.WorkerOnboardingPartQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerOnboardingPartQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerOnboardingPartQuery, TError, TData>(
      ['workerOnboardingPart.infinite', variables],
      (metaData) => fetcher<Types.WorkerOnboardingPartQuery, Types.WorkerOnboardingPartQueryVariables>(WorkerOnboardingPartDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerOnboardingPartQuery.getKey = (variables: Types.WorkerOnboardingPartQueryVariables) => ['workerOnboardingPart.infinite', variables];
;

useWorkerOnboardingPartQuery.fetcher = (variables: Types.WorkerOnboardingPartQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerOnboardingPartQuery, Types.WorkerOnboardingPartQueryVariables>(WorkerOnboardingPartDocument, variables, options);
export const WorkerOnboardingPartsDocument = `
    query workerOnboardingParts($jobId: String!, $jobId1: String!, $jobId2: String!, $workerOnboardingId: String!) {
  workerOnboardingParts(workerOnboardingId: $workerOnboardingId) {
    id
    integration {
      __typename
      ... on GroupOnboardingPart {
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
        id
        state
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
      }
      ... on ProfileOnboarding {
        id
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId1)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
      }
      ... on UserTermsOfService {
        agreedAt
        id
        termsOfService {
          id
          url
          version
        }
      }
      ... on WorkExperienceOverview {
        discipline
        id
        primarySpecialty
        secondarySpecialty
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
        worker {
          agreedToTerms
          availableStartDate
          avatarUrl
          blocked
          changePasswordRequired
          completedJobsNumber
          dateOfBirth
          email
          employmentType
          facilityTypes
          firstName
          hasActiveAssignment
          id
          isFavorited
          jobCategoriesWorkedNumber
          jobMatchingScore(jobId: $jobId2)
          lastName
          lastOtpExpiredAt
          lastSignInAt
          locationsWorkedNumber
          maidenName
          noCall
          noEmail
          noNotification
          noSms
          noTalentMatches
          overallRating
          phone
          phoneVerifiedAt
          profilePercentageCompleted
          referralCode
          referralMethod
          referrerCode
          remainingExpirationTime
          shiftRequested
          socialSecurityNumber
          timeOffRequested
          totalUnreadMessage
          workAuthorized
        }
        yearsOfExperience
      }
      ... on WorkerCertificationOverview {
        id
        workerCertifications {
          certificationType
          compactLicense
          createdAt
          expirationDate
          id
          licenseDiscipline
          licenseNumber
          licenseState
          title
        }
      }
      ... on WorkerEducationOverview {
        id
        workerEducations {
          city
          country
          createdAt
          degreeDate
          degreeName
          id
          major
          schoolName
          state
        }
      }
      ... on WorkerReferenceOnboarding {
        id
        workerReferences {
          city
          contactEmail
          contactFirstName
          contactFullName
          contactLastName
          contactPhone
          createdAt
          facilityName
          id
          jobTitle
          refType
          relationship
          salutation
          state
          workedFrom
          workedTo
        }
      }
    }
    integrationConfigurations
    integrationObject
    onboardingPart {
      companyId
      companyOnboardingId
      confirmationMessage
      description
      failedMessage
      id
      integrationObject
      isEnabled
      name
      pendingMessage
      quizId
      referenceUrl
    }
    state
    workerId
    workerOnboarding {
      companyOnboardingId
      currentPartIndex
      id
      message
      numOfCompletedSteps
      percentageCompleted
      permittedEvents
      state
    }
  }
}
    `;
export const useWorkerOnboardingPartsQuery = <
      TData = Types.WorkerOnboardingPartsQuery,
      TError = unknown
    >(
      variables: Types.WorkerOnboardingPartsQueryVariables,
      options?: UseQueryOptions<Types.WorkerOnboardingPartsQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerOnboardingPartsQuery, TError, TData>(
      ['workerOnboardingParts', variables],
      fetcher<Types.WorkerOnboardingPartsQuery, Types.WorkerOnboardingPartsQueryVariables>(WorkerOnboardingPartsDocument, variables),
      options
    );

useWorkerOnboardingPartsQuery.getKey = (variables: Types.WorkerOnboardingPartsQueryVariables) => ['workerOnboardingParts', variables];
;

export const useInfiniteWorkerOnboardingPartsQuery = <
      TData = Types.WorkerOnboardingPartsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerOnboardingPartsQueryVariables,
      variables: Types.WorkerOnboardingPartsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerOnboardingPartsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerOnboardingPartsQuery, TError, TData>(
      ['workerOnboardingParts.infinite', variables],
      (metaData) => fetcher<Types.WorkerOnboardingPartsQuery, Types.WorkerOnboardingPartsQueryVariables>(WorkerOnboardingPartsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerOnboardingPartsQuery.getKey = (variables: Types.WorkerOnboardingPartsQueryVariables) => ['workerOnboardingParts.infinite', variables];
;

useWorkerOnboardingPartsQuery.fetcher = (variables: Types.WorkerOnboardingPartsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerOnboardingPartsQuery, Types.WorkerOnboardingPartsQueryVariables>(WorkerOnboardingPartsDocument, variables, options);
export const WorkerOnboardingsDocument = `
    query workerOnboardings($jobId: String!, $companyId: String) {
  workerOnboardings(companyId: $companyId) {
    companyOnboardingId
    currentPartIndex
    id
    message
    numOfCompletedSteps
    pendingWorkerOnboardingPart {
      id
      integration {
        __typename
        ... on GroupOnboardingPart {
          id
          state
        }
        ... on ProfileOnboarding {
          id
        }
        ... on UserTermsOfService {
          agreedAt
          id
        }
        ... on WorkExperienceOverview {
          discipline
          id
          primarySpecialty
          secondarySpecialty
          yearsOfExperience
        }
        ... on WorkerCertificationOverview {
          id
        }
        ... on WorkerEducationOverview {
          id
        }
        ... on WorkerReferenceOnboarding {
          id
        }
      }
      integrationConfigurations
      integrationObject
      state
      workerId
    }
    percentageCompleted
    permittedEvents
    state
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useWorkerOnboardingsQuery = <
      TData = Types.WorkerOnboardingsQuery,
      TError = unknown
    >(
      variables: Types.WorkerOnboardingsQueryVariables,
      options?: UseQueryOptions<Types.WorkerOnboardingsQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerOnboardingsQuery, TError, TData>(
      ['workerOnboardings', variables],
      fetcher<Types.WorkerOnboardingsQuery, Types.WorkerOnboardingsQueryVariables>(WorkerOnboardingsDocument, variables),
      options
    );

useWorkerOnboardingsQuery.getKey = (variables: Types.WorkerOnboardingsQueryVariables) => ['workerOnboardings', variables];
;

export const useInfiniteWorkerOnboardingsQuery = <
      TData = Types.WorkerOnboardingsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerOnboardingsQueryVariables,
      variables: Types.WorkerOnboardingsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerOnboardingsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerOnboardingsQuery, TError, TData>(
      ['workerOnboardings.infinite', variables],
      (metaData) => fetcher<Types.WorkerOnboardingsQuery, Types.WorkerOnboardingsQueryVariables>(WorkerOnboardingsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerOnboardingsQuery.getKey = (variables: Types.WorkerOnboardingsQueryVariables) => ['workerOnboardings.infinite', variables];
;

useWorkerOnboardingsQuery.fetcher = (variables: Types.WorkerOnboardingsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerOnboardingsQuery, Types.WorkerOnboardingsQueryVariables>(WorkerOnboardingsDocument, variables, options);
export const WorkerQuizDocument = `
    query workerQuiz($id: String!) {
  workerQuiz(id: $id) {
    correctionPercentage
    id
    quiz {
      companyId
      description
      id
      name
      passingPercentage
      quizQuestionsNumber
    }
    state
    workerId
    workerQuizAnswers {
      id
      quizAnswerId
      workerId
    }
  }
}
    `;
export const useWorkerQuizQuery = <
      TData = Types.WorkerQuizQuery,
      TError = unknown
    >(
      variables: Types.WorkerQuizQueryVariables,
      options?: UseQueryOptions<Types.WorkerQuizQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerQuizQuery, TError, TData>(
      ['workerQuiz', variables],
      fetcher<Types.WorkerQuizQuery, Types.WorkerQuizQueryVariables>(WorkerQuizDocument, variables),
      options
    );

useWorkerQuizQuery.getKey = (variables: Types.WorkerQuizQueryVariables) => ['workerQuiz', variables];
;

export const useInfiniteWorkerQuizQuery = <
      TData = Types.WorkerQuizQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerQuizQueryVariables,
      variables: Types.WorkerQuizQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerQuizQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerQuizQuery, TError, TData>(
      ['workerQuiz.infinite', variables],
      (metaData) => fetcher<Types.WorkerQuizQuery, Types.WorkerQuizQueryVariables>(WorkerQuizDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerQuizQuery.getKey = (variables: Types.WorkerQuizQueryVariables) => ['workerQuiz.infinite', variables];
;

useWorkerQuizQuery.fetcher = (variables: Types.WorkerQuizQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerQuizQuery, Types.WorkerQuizQueryVariables>(WorkerQuizDocument, variables, options);
export const WorkerQuizzesDocument = `
    query workerQuizzes($workerId: String!) {
  workerQuizzes(workerId: $workerId) {
    correctionPercentage
    id
    quiz {
      companyId
      description
      id
      name
      passingPercentage
      quizQuestionsNumber
    }
    state
    workerId
    workerQuizAnswers {
      id
      quizAnswerId
      workerId
    }
  }
}
    `;
export const useWorkerQuizzesQuery = <
      TData = Types.WorkerQuizzesQuery,
      TError = unknown
    >(
      variables: Types.WorkerQuizzesQueryVariables,
      options?: UseQueryOptions<Types.WorkerQuizzesQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerQuizzesQuery, TError, TData>(
      ['workerQuizzes', variables],
      fetcher<Types.WorkerQuizzesQuery, Types.WorkerQuizzesQueryVariables>(WorkerQuizzesDocument, variables),
      options
    );

useWorkerQuizzesQuery.getKey = (variables: Types.WorkerQuizzesQueryVariables) => ['workerQuizzes', variables];
;

export const useInfiniteWorkerQuizzesQuery = <
      TData = Types.WorkerQuizzesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerQuizzesQueryVariables,
      variables: Types.WorkerQuizzesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerQuizzesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerQuizzesQuery, TError, TData>(
      ['workerQuizzes.infinite', variables],
      (metaData) => fetcher<Types.WorkerQuizzesQuery, Types.WorkerQuizzesQueryVariables>(WorkerQuizzesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerQuizzesQuery.getKey = (variables: Types.WorkerQuizzesQueryVariables) => ['workerQuizzes.infinite', variables];
;

useWorkerQuizzesQuery.fetcher = (variables: Types.WorkerQuizzesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerQuizzesQuery, Types.WorkerQuizzesQueryVariables>(WorkerQuizzesDocument, variables, options);
export const WorkerReferencesDocument = `
    query workerReferences($jobId: String!, $workerId: String!) {
  workerReferences(workerId: $workerId) {
    city
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
    contactEmail
    contactFirstName
    contactFullName
    contactLastName
    contactPhone
    createdAt
    facilityName
    id
    jobTitle
    refType
    relationship
    salutation
    state
    workedFrom
    workedTo
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useWorkerReferencesQuery = <
      TData = Types.WorkerReferencesQuery,
      TError = unknown
    >(
      variables: Types.WorkerReferencesQueryVariables,
      options?: UseQueryOptions<Types.WorkerReferencesQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerReferencesQuery, TError, TData>(
      ['workerReferences', variables],
      fetcher<Types.WorkerReferencesQuery, Types.WorkerReferencesQueryVariables>(WorkerReferencesDocument, variables),
      options
    );

useWorkerReferencesQuery.getKey = (variables: Types.WorkerReferencesQueryVariables) => ['workerReferences', variables];
;

export const useInfiniteWorkerReferencesQuery = <
      TData = Types.WorkerReferencesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerReferencesQueryVariables,
      variables: Types.WorkerReferencesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerReferencesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerReferencesQuery, TError, TData>(
      ['workerReferences.infinite', variables],
      (metaData) => fetcher<Types.WorkerReferencesQuery, Types.WorkerReferencesQueryVariables>(WorkerReferencesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerReferencesQuery.getKey = (variables: Types.WorkerReferencesQueryVariables) => ['workerReferences.infinite', variables];
;

useWorkerReferencesQuery.fetcher = (variables: Types.WorkerReferencesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerReferencesQuery, Types.WorkerReferencesQueryVariables>(WorkerReferencesDocument, variables, options);
export const WorkerSocialAuthenticationsDocument = `
    query workerSocialAuthentications {
  workerSocialAuthentications {
    email
    firstName
    id
    lastName
    providerName
    providerUuid
    userId
  }
}
    `;
export const useWorkerSocialAuthenticationsQuery = <
      TData = Types.WorkerSocialAuthenticationsQuery,
      TError = unknown
    >(
      variables?: Types.WorkerSocialAuthenticationsQueryVariables,
      options?: UseQueryOptions<Types.WorkerSocialAuthenticationsQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerSocialAuthenticationsQuery, TError, TData>(
      variables === undefined ? ['workerSocialAuthentications'] : ['workerSocialAuthentications', variables],
      fetcher<Types.WorkerSocialAuthenticationsQuery, Types.WorkerSocialAuthenticationsQueryVariables>(WorkerSocialAuthenticationsDocument, variables),
      options
    );

useWorkerSocialAuthenticationsQuery.getKey = (variables?: Types.WorkerSocialAuthenticationsQueryVariables) => variables === undefined ? ['workerSocialAuthentications'] : ['workerSocialAuthentications', variables];
;

export const useInfiniteWorkerSocialAuthenticationsQuery = <
      TData = Types.WorkerSocialAuthenticationsQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerSocialAuthenticationsQueryVariables,
      variables?: Types.WorkerSocialAuthenticationsQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerSocialAuthenticationsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerSocialAuthenticationsQuery, TError, TData>(
      variables === undefined ? ['workerSocialAuthentications.infinite'] : ['workerSocialAuthentications.infinite', variables],
      (metaData) => fetcher<Types.WorkerSocialAuthenticationsQuery, Types.WorkerSocialAuthenticationsQueryVariables>(WorkerSocialAuthenticationsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerSocialAuthenticationsQuery.getKey = (variables?: Types.WorkerSocialAuthenticationsQueryVariables) => variables === undefined ? ['workerSocialAuthentications.infinite'] : ['workerSocialAuthentications.infinite', variables];
;

useWorkerSocialAuthenticationsQuery.fetcher = (variables?: Types.WorkerSocialAuthenticationsQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerSocialAuthenticationsQuery, Types.WorkerSocialAuthenticationsQueryVariables>(WorkerSocialAuthenticationsDocument, variables, options);
export const WorkerSpecialtiesDocument = `
    query workerSpecialties($jobId: String!) {
  workerSpecialties {
    category
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
    completedChecklist
    id
    isExpired
    isPrimary
    specialty
    specialtyId
    specialtyLongName
    status
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
    workerSkillChecklistSections {
      id
      name
    }
  }
}
    `;
export const useWorkerSpecialtiesQuery = <
      TData = Types.WorkerSpecialtiesQuery,
      TError = unknown
    >(
      variables: Types.WorkerSpecialtiesQueryVariables,
      options?: UseQueryOptions<Types.WorkerSpecialtiesQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerSpecialtiesQuery, TError, TData>(
      ['workerSpecialties', variables],
      fetcher<Types.WorkerSpecialtiesQuery, Types.WorkerSpecialtiesQueryVariables>(WorkerSpecialtiesDocument, variables),
      options
    );

useWorkerSpecialtiesQuery.getKey = (variables: Types.WorkerSpecialtiesQueryVariables) => ['workerSpecialties', variables];
;

export const useInfiniteWorkerSpecialtiesQuery = <
      TData = Types.WorkerSpecialtiesQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerSpecialtiesQueryVariables,
      variables: Types.WorkerSpecialtiesQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerSpecialtiesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerSpecialtiesQuery, TError, TData>(
      ['workerSpecialties.infinite', variables],
      (metaData) => fetcher<Types.WorkerSpecialtiesQuery, Types.WorkerSpecialtiesQueryVariables>(WorkerSpecialtiesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerSpecialtiesQuery.getKey = (variables: Types.WorkerSpecialtiesQueryVariables) => ['workerSpecialties.infinite', variables];
;

useWorkerSpecialtiesQuery.fetcher = (variables: Types.WorkerSpecialtiesQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerSpecialtiesQuery, Types.WorkerSpecialtiesQueryVariables>(WorkerSpecialtiesDocument, variables, options);
export const WorkerTokenDocument = `
    query workerToken($jobId: String!, $token: String!) {
  workerToken(token: $token) {
    notificationChannel
    token
    worker {
      agreedToTerms
      availableStartDate
      avatarUrl
      blocked
      changePasswordRequired
      completedJobsNumber
      dateOfBirth
      email
      employmentType
      facilityTypes
      firstName
      hasActiveAssignment
      id
      isFavorited
      jobCategoriesWorkedNumber
      jobMatchingScore(jobId: $jobId)
      lastName
      lastOtpExpiredAt
      lastSignInAt
      locationsWorkedNumber
      maidenName
      noCall
      noEmail
      noNotification
      noSms
      noTalentMatches
      overallRating
      phone
      phoneVerifiedAt
      profilePercentageCompleted
      referralCode
      referralMethod
      referrerCode
      remainingExpirationTime
      shiftRequested
      socialSecurityNumber
      timeOffRequested
      totalUnreadMessage
      workAuthorized
    }
  }
}
    `;
export const useWorkerTokenQuery = <
      TData = Types.WorkerTokenQuery,
      TError = unknown
    >(
      variables: Types.WorkerTokenQueryVariables,
      options?: UseQueryOptions<Types.WorkerTokenQuery, TError, TData>
    ) =>
    useQuery<Types.WorkerTokenQuery, TError, TData>(
      ['workerToken', variables],
      fetcher<Types.WorkerTokenQuery, Types.WorkerTokenQueryVariables>(WorkerTokenDocument, variables),
      options
    );

useWorkerTokenQuery.getKey = (variables: Types.WorkerTokenQueryVariables) => ['workerToken', variables];
;

export const useInfiniteWorkerTokenQuery = <
      TData = Types.WorkerTokenQuery,
      TError = unknown
    >(
      pageParamKey: keyof Types.WorkerTokenQueryVariables,
      variables: Types.WorkerTokenQueryVariables,
      options?: UseInfiniteQueryOptions<Types.WorkerTokenQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<Types.WorkerTokenQuery, TError, TData>(
      ['workerToken.infinite', variables],
      (metaData) => fetcher<Types.WorkerTokenQuery, Types.WorkerTokenQueryVariables>(WorkerTokenDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteWorkerTokenQuery.getKey = (variables: Types.WorkerTokenQueryVariables) => ['workerToken.infinite', variables];
;

useWorkerTokenQuery.fetcher = (variables: Types.WorkerTokenQueryVariables, options?: RequestInit['headers']) => fetcher<Types.WorkerTokenQuery, Types.WorkerTokenQueryVariables>(WorkerTokenDocument, variables, options);