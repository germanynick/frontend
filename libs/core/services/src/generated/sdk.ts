import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import * as Operations from './hooks';

















































































































































































































































export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    activeClient(variables: Types.ActiveClientMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ActiveClientMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ActiveClientMutation>(Operations.ActiveClientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'activeClient', 'mutation');
    },
    activeLocation(variables: Types.ActiveLocationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ActiveLocationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ActiveLocationMutation>(Operations.ActiveLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'activeLocation', 'mutation');
    },
    addPaymentMethod(variables: Types.AddPaymentMethodMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AddPaymentMethodMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AddPaymentMethodMutation>(Operations.AddPaymentMethodDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addPaymentMethod', 'mutation');
    },
    adminCreateOrUpdateWorkerBlock(variables: Types.AdminCreateOrUpdateWorkerBlockMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AdminCreateOrUpdateWorkerBlockMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AdminCreateOrUpdateWorkerBlockMutation>(Operations.AdminCreateOrUpdateWorkerBlockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminCreateOrUpdateWorkerBlock', 'mutation');
    },
    adminSendAdminReminders(variables: Types.AdminSendAdminRemindersMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AdminSendAdminRemindersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AdminSendAdminRemindersMutation>(Operations.AdminSendAdminRemindersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminSendAdminReminders', 'mutation');
    },
    adminSendPasswordResetWorker(variables: Types.AdminSendPasswordResetWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AdminSendPasswordResetWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AdminSendPasswordResetWorkerMutation>(Operations.AdminSendPasswordResetWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminSendPasswordResetWorker', 'mutation');
    },
    adminUpdateWorkerOnboardingPart(variables: Types.AdminUpdateWorkerOnboardingPartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AdminUpdateWorkerOnboardingPartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AdminUpdateWorkerOnboardingPartMutation>(Operations.AdminUpdateWorkerOnboardingPartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminUpdateWorkerOnboardingPart', 'mutation');
    },
    adminUploadDocumentsWorker(variables: Types.AdminUploadDocumentsWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AdminUploadDocumentsWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AdminUploadDocumentsWorkerMutation>(Operations.AdminUploadDocumentsWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminUploadDocumentsWorker', 'mutation');
    },
    bookmarkAJob(variables: Types.BookmarkAJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.BookmarkAJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.BookmarkAJobMutation>(Operations.BookmarkAJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'bookmarkAJob', 'mutation');
    },
    cancelWorkerOnboarding(variables: Types.CancelWorkerOnboardingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CancelWorkerOnboardingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CancelWorkerOnboardingMutation>(Operations.CancelWorkerOnboardingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cancelWorkerOnboarding', 'mutation');
    },
    cancelWorkerOnboardingPart(variables: Types.CancelWorkerOnboardingPartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CancelWorkerOnboardingPartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CancelWorkerOnboardingPartMutation>(Operations.CancelWorkerOnboardingPartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cancelWorkerOnboardingPart', 'mutation');
    },
    changePasswordEmployer(variables: Types.ChangePasswordEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ChangePasswordEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ChangePasswordEmployerMutation>(Operations.ChangePasswordEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changePasswordEmployer', 'mutation');
    },
    changePasswordForUser(variables: Types.ChangePasswordForUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ChangePasswordForUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ChangePasswordForUserMutation>(Operations.ChangePasswordForUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changePasswordForUser', 'mutation');
    },
    changeStatusEmployer(variables: Types.ChangeStatusEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ChangeStatusEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ChangeStatusEmployerMutation>(Operations.ChangeStatusEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changeStatusEmployer', 'mutation');
    },
    closeJob(variables: Types.CloseJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CloseJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CloseJobMutation>(Operations.CloseJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'closeJob', 'mutation');
    },
    createClient(variables: Types.CreateClientMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateClientMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateClientMutation>(Operations.CreateClientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createClient', 'mutation');
    },
    createCompanyOnboarding(variables: Types.CreateCompanyOnboardingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateCompanyOnboardingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateCompanyOnboardingMutation>(Operations.CreateCompanyOnboardingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCompanyOnboarding', 'mutation');
    },
    createDirectUpload(variables: Types.CreateDirectUploadMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateDirectUploadMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateDirectUploadMutation>(Operations.CreateDirectUploadDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createDirectUpload', 'mutation');
    },
    createDraftJob(variables?: Types.CreateDraftJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateDraftJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateDraftJobMutation>(Operations.CreateDraftJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createDraftJob', 'mutation');
    },
    createEmployer(variables: Types.CreateEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateEmployerMutation>(Operations.CreateEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createEmployer', 'mutation');
    },
    createExtendAssignment(variables: Types.CreateExtendAssignmentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateExtendAssignmentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateExtendAssignmentMutation>(Operations.CreateExtendAssignmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createExtendAssignment', 'mutation');
    },
    createFeedbackContactForm(variables: Types.CreateFeedbackContactFormMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateFeedbackContactFormMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateFeedbackContactFormMutation>(Operations.CreateFeedbackContactFormDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createFeedbackContactForm', 'mutation');
    },
    createImportBatch(variables: Types.CreateImportBatchMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateImportBatchMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateImportBatchMutation>(Operations.CreateImportBatchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createImportBatch', 'mutation');
    },
    createIntegrationWorker(variables: Types.CreateIntegrationWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateIntegrationWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateIntegrationWorkerMutation>(Operations.CreateIntegrationWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createIntegrationWorker', 'mutation');
    },
    createInterview(variables: Types.CreateInterviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateInterviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateInterviewMutation>(Operations.CreateInterviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createInterview', 'mutation');
    },
    createJob(variables?: Types.CreateJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateJobMutation>(Operations.CreateJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createJob', 'mutation');
    },
    createJobApplicant(variables: Types.CreateJobApplicantMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateJobApplicantMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateJobApplicantMutation>(Operations.CreateJobApplicantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createJobApplicant', 'mutation');
    },
    createJobTemplate(variables: Types.CreateJobTemplateMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateJobTemplateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateJobTemplateMutation>(Operations.CreateJobTemplateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createJobTemplate', 'mutation');
    },
    createLocation(variables?: Types.CreateLocationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateLocationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateLocationMutation>(Operations.CreateLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createLocation', 'mutation');
    },
    createMessage(variables: Types.CreateMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateMessageMutation>(Operations.CreateMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createMessage', 'mutation');
    },
    createMultiJobApplicants(variables: Types.CreateMultiJobApplicantsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateMultiJobApplicantsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateMultiJobApplicantsMutation>(Operations.CreateMultiJobApplicantsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createMultiJobApplicants', 'mutation');
    },
    createOnboardingPart(variables: Types.CreateOnboardingPartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateOnboardingPartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateOnboardingPartMutation>(Operations.CreateOnboardingPartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOnboardingPart', 'mutation');
    },
    createOrUpdateSupportDocument(variables: Types.CreateOrUpdateSupportDocumentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateOrUpdateSupportDocumentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateOrUpdateSupportDocumentMutation>(Operations.CreateOrUpdateSupportDocumentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOrUpdateSupportDocument', 'mutation');
    },
    createOrUpdateWorkerResumes(variables: Types.CreateOrUpdateWorkerResumesMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateOrUpdateWorkerResumesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateOrUpdateWorkerResumesMutation>(Operations.CreateOrUpdateWorkerResumesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOrUpdateWorkerResumes', 'mutation');
    },
    createOrUpdateWorkerSpecialty(variables: Types.CreateOrUpdateWorkerSpecialtyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateOrUpdateWorkerSpecialtyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateOrUpdateWorkerSpecialtyMutation>(Operations.CreateOrUpdateWorkerSpecialtyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOrUpdateWorkerSpecialty', 'mutation');
    },
    createReferredTraveler(variables: Types.CreateReferredTravelerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateReferredTravelerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateReferredTravelerMutation>(Operations.CreateReferredTravelerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createReferredTraveler', 'mutation');
    },
    createSavedFilter(variables: Types.CreateSavedFilterMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateSavedFilterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateSavedFilterMutation>(Operations.CreateSavedFilterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createSavedFilter', 'mutation');
    },
    createWorkExperience(variables: Types.CreateWorkExperienceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateWorkExperienceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateWorkExperienceMutation>(Operations.CreateWorkExperienceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWorkExperience', 'mutation');
    },
    createWorkedTimesheet(variables: Types.CreateWorkedTimesheetMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateWorkedTimesheetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateWorkedTimesheetMutation>(Operations.CreateWorkedTimesheetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWorkedTimesheet', 'mutation');
    },
    createWorkerBlock(variables: Types.CreateWorkerBlockMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateWorkerBlockMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateWorkerBlockMutation>(Operations.CreateWorkerBlockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWorkerBlock', 'mutation');
    },
    createWorkerCertification(variables: Types.CreateWorkerCertificationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateWorkerCertificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateWorkerCertificationMutation>(Operations.CreateWorkerCertificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWorkerCertification', 'mutation');
    },
    createWorkerEducation(variables: Types.CreateWorkerEducationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateWorkerEducationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateWorkerEducationMutation>(Operations.CreateWorkerEducationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWorkerEducation', 'mutation');
    },
    createWorkerOnboarding(variables: Types.CreateWorkerOnboardingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateWorkerOnboardingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateWorkerOnboardingMutation>(Operations.CreateWorkerOnboardingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWorkerOnboarding', 'mutation');
    },
    createWorkerQuiz(variables: Types.CreateWorkerQuizMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateWorkerQuizMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateWorkerQuizMutation>(Operations.CreateWorkerQuizDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWorkerQuiz', 'mutation');
    },
    createWorkerReference(variables: Types.CreateWorkerReferenceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateWorkerReferenceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateWorkerReferenceMutation>(Operations.CreateWorkerReferenceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWorkerReference', 'mutation');
    },
    createWorkingAuthorization(variables: Types.CreateWorkingAuthorizationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CreateWorkingAuthorizationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CreateWorkingAuthorizationMutation>(Operations.CreateWorkingAuthorizationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWorkingAuthorization', 'mutation');
    },
    deactiveClient(variables: Types.DeactiveClientMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DeactiveClientMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DeactiveClientMutation>(Operations.DeactiveClientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deactiveClient', 'mutation');
    },
    deactiveLocation(variables: Types.DeactiveLocationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DeactiveLocationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DeactiveLocationMutation>(Operations.DeactiveLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deactiveLocation', 'mutation');
    },
    destroyDraftJob(variables: Types.DestroyDraftJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyDraftJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyDraftJobMutation>(Operations.DestroyDraftJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyDraftJob', 'mutation');
    },
    destroyFile(variables: Types.DestroyFileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyFileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyFileMutation>(Operations.DestroyFileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyFile', 'mutation');
    },
    destroyFiles(variables: Types.DestroyFilesMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyFilesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyFilesMutation>(Operations.DestroyFilesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyFiles', 'mutation');
    },
    destroyJobTemplate(variables: Types.DestroyJobTemplateMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyJobTemplateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyJobTemplateMutation>(Operations.DestroyJobTemplateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyJobTemplate', 'mutation');
    },
    destroySavedFilter(variables?: Types.DestroySavedFilterMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroySavedFilterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroySavedFilterMutation>(Operations.DestroySavedFilterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroySavedFilter', 'mutation');
    },
    destroyWorkExperience(variables: Types.DestroyWorkExperienceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyWorkExperienceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyWorkExperienceMutation>(Operations.DestroyWorkExperienceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyWorkExperience', 'mutation');
    },
    destroyWorkedShift(variables: Types.DestroyWorkedShiftMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyWorkedShiftMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyWorkedShiftMutation>(Operations.DestroyWorkedShiftDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyWorkedShift', 'mutation');
    },
    destroyWorkerCertification(variables: Types.DestroyWorkerCertificationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyWorkerCertificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyWorkerCertificationMutation>(Operations.DestroyWorkerCertificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyWorkerCertification', 'mutation');
    },
    destroyWorkerEducation(variables: Types.DestroyWorkerEducationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyWorkerEducationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyWorkerEducationMutation>(Operations.DestroyWorkerEducationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyWorkerEducation', 'mutation');
    },
    destroyWorkerExpense(variables: Types.DestroyWorkerExpenseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyWorkerExpenseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyWorkerExpenseMutation>(Operations.DestroyWorkerExpenseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyWorkerExpense', 'mutation');
    },
    destroyWorkerReference(variables: Types.DestroyWorkerReferenceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyWorkerReferenceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyWorkerReferenceMutation>(Operations.DestroyWorkerReferenceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyWorkerReference', 'mutation');
    },
    destroyWorkerSpecialty(variables: Types.DestroyWorkerSpecialtyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DestroyWorkerSpecialtyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DestroyWorkerSpecialtyMutation>(Operations.DestroyWorkerSpecialtyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'destroyWorkerSpecialty', 'mutation');
    },
    directOffer(variables: Types.DirectOfferMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DirectOfferMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DirectOfferMutation>(Operations.DirectOfferDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'directOffer', 'mutation');
    },
    disconnectSocialAuthentication(variables: Types.DisconnectSocialAuthenticationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DisconnectSocialAuthenticationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DisconnectSocialAuthenticationMutation>(Operations.DisconnectSocialAuthenticationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'disconnectSocialAuthentication', 'mutation');
    },
    dismissBulletin(variables: Types.DismissBulletinMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DismissBulletinMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DismissBulletinMutation>(Operations.DismissBulletinDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'dismissBulletin', 'mutation');
    },
    employerCancelInterview(variables: Types.EmployerCancelInterviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerCancelInterviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerCancelInterviewMutation>(Operations.EmployerCancelInterviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerCancelInterview', 'mutation');
    },
    employerFavoriteWorker(variables: Types.EmployerFavoriteWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerFavoriteWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerFavoriteWorkerMutation>(Operations.EmployerFavoriteWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerFavoriteWorker', 'mutation');
    },
    employerRescheduleInterview(variables: Types.EmployerRescheduleInterviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerRescheduleInterviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerRescheduleInterviewMutation>(Operations.EmployerRescheduleInterviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerRescheduleInterview', 'mutation');
    },
    employerUpdateInterview(variables: Types.EmployerUpdateInterviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerUpdateInterviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerUpdateInterviewMutation>(Operations.EmployerUpdateInterviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerUpdateInterview', 'mutation');
    },
    employerUpdateJobApplicant(variables: Types.EmployerUpdateJobApplicantMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerUpdateJobApplicantMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerUpdateJobApplicantMutation>(Operations.EmployerUpdateJobApplicantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerUpdateJobApplicant', 'mutation');
    },
    exportBillingSubscription(variables: Types.ExportBillingSubscriptionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ExportBillingSubscriptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ExportBillingSubscriptionMutation>(Operations.ExportBillingSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'exportBillingSubscription', 'mutation');
    },
    exportClient(variables: Types.ExportClientMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ExportClientMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ExportClientMutation>(Operations.ExportClientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'exportClient', 'mutation');
    },
    exportEmployer(variables: Types.ExportEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ExportEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ExportEmployerMutation>(Operations.ExportEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'exportEmployer', 'mutation');
    },
    exportLocation(variables: Types.ExportLocationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ExportLocationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ExportLocationMutation>(Operations.ExportLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'exportLocation', 'mutation');
    },
    exportWorker(variables: Types.ExportWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ExportWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ExportWorkerMutation>(Operations.ExportWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'exportWorker', 'mutation');
    },
    favoriteOrUnfavoriteAJob(variables: Types.FavoriteOrUnfavoriteAJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.FavoriteOrUnfavoriteAJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.FavoriteOrUnfavoriteAJobMutation>(Operations.FavoriteOrUnfavoriteAJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'favoriteOrUnfavoriteAJob', 'mutation');
    },
    likeOrDislikeAJob(variables: Types.LikeOrDislikeAJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.LikeOrDislikeAJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.LikeOrDislikeAJobMutation>(Operations.LikeOrDislikeAJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'likeOrDislikeAJob', 'mutation');
    },
    markAllMessagesAsRead(variables: Types.MarkAllMessagesAsReadMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.MarkAllMessagesAsReadMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.MarkAllMessagesAsReadMutation>(Operations.MarkAllMessagesAsReadDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markAllMessagesAsRead', 'mutation');
    },
    markAllNotificationsStatus(variables?: Types.MarkAllNotificationsStatusMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.MarkAllNotificationsStatusMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.MarkAllNotificationsStatusMutation>(Operations.MarkAllNotificationsStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markAllNotificationsStatus', 'mutation');
    },
    markCompleteComponent(variables: Types.MarkCompleteComponentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.MarkCompleteComponentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.MarkCompleteComponentMutation>(Operations.MarkCompleteComponentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markCompleteComponent', 'mutation');
    },
    markMessageAsRead(variables: Types.MarkMessageAsReadMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.MarkMessageAsReadMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.MarkMessageAsReadMutation>(Operations.MarkMessageAsReadDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markMessageAsRead', 'mutation');
    },
    markNotificationsStatus(variables: Types.MarkNotificationsStatusMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.MarkNotificationsStatusMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.MarkNotificationsStatusMutation>(Operations.MarkNotificationsStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markNotificationsStatus', 'mutation');
    },
    publicCreateContactForm(variables?: Types.PublicCreateContactFormMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PublicCreateContactFormMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PublicCreateContactFormMutation>(Operations.PublicCreateContactFormDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'publicCreateContactForm', 'mutation');
    },
    publicCreateEmployer(variables: Types.PublicCreateEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PublicCreateEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PublicCreateEmployerMutation>(Operations.PublicCreateEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'publicCreateEmployer', 'mutation');
    },
    publicCreateWorker(variables: Types.PublicCreateWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PublicCreateWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PublicCreateWorkerMutation>(Operations.PublicCreateWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'publicCreateWorker', 'mutation');
    },
    publishDraftJob(variables: Types.PublishDraftJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PublishDraftJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PublishDraftJobMutation>(Operations.PublishDraftJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'publishDraftJob', 'mutation');
    },
    quickApplyJob(variables: Types.QuickApplyJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.QuickApplyJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.QuickApplyJobMutation>(Operations.QuickApplyJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'quickApplyJob', 'mutation');
    },
    rejectClient(variables: Types.RejectClientMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.RejectClientMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.RejectClientMutation>(Operations.RejectClientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'rejectClient', 'mutation');
    },
    removeBillingSubscription(variables?: Types.RemoveBillingSubscriptionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.RemoveBillingSubscriptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.RemoveBillingSubscriptionMutation>(Operations.RemoveBillingSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeBillingSubscription', 'mutation');
    },
    removeEmployer(variables: Types.RemoveEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.RemoveEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.RemoveEmployerMutation>(Operations.RemoveEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeEmployer', 'mutation');
    },
    removePaymentMethod(variables: Types.RemovePaymentMethodMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.RemovePaymentMethodMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.RemovePaymentMethodMutation>(Operations.RemovePaymentMethodDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removePaymentMethod', 'mutation');
    },
    replaceInterviewer(variables: Types.ReplaceInterviewerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ReplaceInterviewerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ReplaceInterviewerMutation>(Operations.ReplaceInterviewerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'replaceInterviewer', 'mutation');
    },
    replayDismissedBulletin(variables: Types.ReplayDismissedBulletinMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ReplayDismissedBulletinMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ReplayDismissedBulletinMutation>(Operations.ReplayDismissedBulletinDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'replayDismissedBulletin', 'mutation');
    },
    resetPasswordForUser(variables: Types.ResetPasswordForUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ResetPasswordForUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ResetPasswordForUserMutation>(Operations.ResetPasswordForUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'resetPasswordForUser', 'mutation');
    },
    sendOtpCode(variables: Types.SendOtpCodeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SendOtpCodeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SendOtpCodeMutation>(Operations.SendOtpCodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendOtpCode', 'mutation');
    },
    sendPasswordResetEmployer(variables: Types.SendPasswordResetEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SendPasswordResetEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SendPasswordResetEmployerMutation>(Operations.SendPasswordResetEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendPasswordResetEmployer', 'mutation');
    },
    sendPasswordResetWorker(variables: Types.SendPasswordResetWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SendPasswordResetWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SendPasswordResetWorkerMutation>(Operations.SendPasswordResetWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendPasswordResetWorker', 'mutation');
    },
    setDefaultPaymentMethod(variables: Types.SetDefaultPaymentMethodMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SetDefaultPaymentMethodMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SetDefaultPaymentMethodMutation>(Operations.SetDefaultPaymentMethodDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setDefaultPaymentMethod', 'mutation');
    },
    signInEmployer(variables: Types.SignInEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SignInEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SignInEmployerMutation>(Operations.SignInEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signInEmployer', 'mutation');
    },
    signInWorker(variables: Types.SignInWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SignInWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SignInWorkerMutation>(Operations.SignInWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signInWorker', 'mutation');
    },
    signOutEmployer(variables?: Types.SignOutEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SignOutEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SignOutEmployerMutation>(Operations.SignOutEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signOutEmployer', 'mutation');
    },
    signOutWorker(variables?: Types.SignOutWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SignOutWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SignOutWorkerMutation>(Operations.SignOutWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signOutWorker', 'mutation');
    },
    signUpEmployer(variables: Types.SignUpEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SignUpEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SignUpEmployerMutation>(Operations.SignUpEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signUpEmployer', 'mutation');
    },
    skipScreenStep(variables?: Types.SkipScreenStepMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SkipScreenStepMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SkipScreenStepMutation>(Operations.SkipScreenStepDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'skipScreenStep', 'mutation');
    },
    startWorkerOnboarding(variables: Types.StartWorkerOnboardingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.StartWorkerOnboardingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.StartWorkerOnboardingMutation>(Operations.StartWorkerOnboardingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'startWorkerOnboarding', 'mutation');
    },
    syncAnonymousWorkerData(variables: Types.SyncAnonymousWorkerDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SyncAnonymousWorkerDataMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SyncAnonymousWorkerDataMutation>(Operations.SyncAnonymousWorkerDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'syncAnonymousWorkerData', 'mutation');
    },
    unblockWorker(variables: Types.UnblockWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UnblockWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UnblockWorkerMutation>(Operations.UnblockWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'unblockWorker', 'mutation');
    },
    updateBillingSubscription(variables: Types.UpdateBillingSubscriptionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateBillingSubscriptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateBillingSubscriptionMutation>(Operations.UpdateBillingSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateBillingSubscription', 'mutation');
    },
    updateClient(variables: Types.UpdateClientMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateClientMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateClientMutation>(Operations.UpdateClientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateClient', 'mutation');
    },
    updateCompanyOnboarding(variables: Types.UpdateCompanyOnboardingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateCompanyOnboardingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateCompanyOnboardingMutation>(Operations.UpdateCompanyOnboardingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCompanyOnboarding', 'mutation');
    },
    updateDraftJob(variables: Types.UpdateDraftJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateDraftJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateDraftJobMutation>(Operations.UpdateDraftJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateDraftJob', 'mutation');
    },
    updateEmployer(variables: Types.UpdateEmployerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateEmployerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateEmployerMutation>(Operations.UpdateEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateEmployer', 'mutation');
    },
    updateIntegrationWorker(variables: Types.UpdateIntegrationWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateIntegrationWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateIntegrationWorkerMutation>(Operations.UpdateIntegrationWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateIntegrationWorker', 'mutation');
    },
    updateJob(variables: Types.UpdateJobMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateJobMutation>(Operations.UpdateJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateJob', 'mutation');
    },
    updateJobTemplate(variables: Types.UpdateJobTemplateMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateJobTemplateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateJobTemplateMutation>(Operations.UpdateJobTemplateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateJobTemplate', 'mutation');
    },
    updateLocation(variables: Types.UpdateLocationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateLocationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateLocationMutation>(Operations.UpdateLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateLocation', 'mutation');
    },
    updateNotificationSetting(variables?: Types.UpdateNotificationSettingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateNotificationSettingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateNotificationSettingMutation>(Operations.UpdateNotificationSettingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateNotificationSetting', 'mutation');
    },
    updateOnboardingPart(variables: Types.UpdateOnboardingPartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateOnboardingPartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateOnboardingPartMutation>(Operations.UpdateOnboardingPartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOnboardingPart', 'mutation');
    },
    updatePrimaryWorkerSpecialty(variables: Types.UpdatePrimaryWorkerSpecialtyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdatePrimaryWorkerSpecialtyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdatePrimaryWorkerSpecialtyMutation>(Operations.UpdatePrimaryWorkerSpecialtyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updatePrimaryWorkerSpecialty', 'mutation');
    },
    updateSavedFilter(variables: Types.UpdateSavedFilterMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateSavedFilterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateSavedFilterMutation>(Operations.UpdateSavedFilterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateSavedFilter', 'mutation');
    },
    updateWorkExperience(variables: Types.UpdateWorkExperienceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateWorkExperienceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateWorkExperienceMutation>(Operations.UpdateWorkExperienceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWorkExperience', 'mutation');
    },
    updateWorker(variables: Types.UpdateWorkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateWorkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateWorkerMutation>(Operations.UpdateWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWorker', 'mutation');
    },
    updateWorkerBlock(variables: Types.UpdateWorkerBlockMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateWorkerBlockMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateWorkerBlockMutation>(Operations.UpdateWorkerBlockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWorkerBlock', 'mutation');
    },
    updateWorkerCertification(variables: Types.UpdateWorkerCertificationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateWorkerCertificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateWorkerCertificationMutation>(Operations.UpdateWorkerCertificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWorkerCertification', 'mutation');
    },
    updateWorkerEducation(variables: Types.UpdateWorkerEducationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateWorkerEducationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateWorkerEducationMutation>(Operations.UpdateWorkerEducationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWorkerEducation', 'mutation');
    },
    updateWorkerOnboarding(variables: Types.UpdateWorkerOnboardingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateWorkerOnboardingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateWorkerOnboardingMutation>(Operations.UpdateWorkerOnboardingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWorkerOnboarding', 'mutation');
    },
    updateWorkerOnboardingPart(variables: Types.UpdateWorkerOnboardingPartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateWorkerOnboardingPartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateWorkerOnboardingPartMutation>(Operations.UpdateWorkerOnboardingPartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWorkerOnboardingPart', 'mutation');
    },
    updateWorkerReference(variables: Types.UpdateWorkerReferenceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateWorkerReferenceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateWorkerReferenceMutation>(Operations.UpdateWorkerReferenceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWorkerReference', 'mutation');
    },
    updateWorkingAuthorization(variables: Types.UpdateWorkingAuthorizationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateWorkingAuthorizationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateWorkingAuthorizationMutation>(Operations.UpdateWorkingAuthorizationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWorkingAuthorization', 'mutation');
    },
    updateWorkingPreferredLocations(variables?: Types.UpdateWorkingPreferredLocationsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.UpdateWorkingPreferredLocationsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.UpdateWorkingPreferredLocationsMutation>(Operations.UpdateWorkingPreferredLocationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWorkingPreferredLocations', 'mutation');
    },
    verifyClient(variables: Types.VerifyClientMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.VerifyClientMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.VerifyClientMutation>(Operations.VerifyClientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'verifyClient', 'mutation');
    },
    verifyExistedEmail(variables: Types.VerifyExistedEmailMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.VerifyExistedEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.VerifyExistedEmailMutation>(Operations.VerifyExistedEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'verifyExistedEmail', 'mutation');
    },
    verifyOtpCode(variables: Types.VerifyOtpCodeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.VerifyOtpCodeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.VerifyOtpCodeMutation>(Operations.VerifyOtpCodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'verifyOtpCode', 'mutation');
    },
    verifySocialAuthentication(variables: Types.VerifySocialAuthenticationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.VerifySocialAuthenticationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.VerifySocialAuthenticationMutation>(Operations.VerifySocialAuthenticationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'verifySocialAuthentication', 'mutation');
    },
    workerProcessInterview(variables: Types.WorkerProcessInterviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerProcessInterviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerProcessInterviewMutation>(Operations.WorkerProcessInterviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerProcessInterview', 'mutation');
    },
    workerRescheduleInterview(variables: Types.WorkerRescheduleInterviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerRescheduleInterviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerRescheduleInterviewMutation>(Operations.WorkerRescheduleInterviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerRescheduleInterview', 'mutation');
    },
    activeJobs(variables?: Types.ActiveJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ActiveJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ActiveJobsQuery>(Operations.ActiveJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'activeJobs', 'query');
    },
    activeListWorkerAssignments(variables?: Types.ActiveListWorkerAssignmentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ActiveListWorkerAssignmentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ActiveListWorkerAssignmentsQuery>(Operations.ActiveListWorkerAssignmentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'activeListWorkerAssignments', 'query');
    },
    adminWorkerOnboardingOverview(variables: Types.AdminWorkerOnboardingOverviewQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AdminWorkerOnboardingOverviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AdminWorkerOnboardingOverviewQuery>(Operations.AdminWorkerOnboardingOverviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminWorkerOnboardingOverview', 'query');
    },
    allowDismissedBulletins(variables?: Types.AllowDismissedBulletinsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AllowDismissedBulletinsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AllowDismissedBulletinsQuery>(Operations.AllowDismissedBulletinsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allowDismissedBulletins', 'query');
    },
    appInit(variables: Types.AppInitQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AppInitQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AppInitQuery>(Operations.AppInitDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'appInit', 'query');
    },
    appWalkthroughs(variables?: Types.AppWalkthroughsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AppWalkthroughsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AppWalkthroughsQuery>(Operations.AppWalkthroughsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'appWalkthroughs', 'query');
    },
    appliedJobs(variables: Types.AppliedJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AppliedJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AppliedJobsQuery>(Operations.AppliedJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'appliedJobs', 'query');
    },
    billingPlans(variables?: Types.BillingPlansQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.BillingPlansQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.BillingPlansQuery>(Operations.BillingPlansDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'billingPlans', 'query');
    },
    billingSubscriptions(variables?: Types.BillingSubscriptionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.BillingSubscriptionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.BillingSubscriptionsQuery>(Operations.BillingSubscriptionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'billingSubscriptions', 'query');
    },
    bookmarkedJobs(variables?: Types.BookmarkedJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.BookmarkedJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.BookmarkedJobsQuery>(Operations.BookmarkedJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'bookmarkedJobs', 'query');
    },
    bulletins(variables?: Types.BulletinsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.BulletinsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.BulletinsQuery>(Operations.BulletinsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'bulletins', 'query');
    },
    cities(variables: Types.CitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CitiesQuery>(Operations.CitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cities', 'query');
    },
    closedJobsList(variables: Types.ClosedJobsListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ClosedJobsListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ClosedJobsListQuery>(Operations.ClosedJobsListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'closedJobsList', 'query');
    },
    company(variables: Types.CompanyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CompanyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CompanyQuery>(Operations.CompanyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'company', 'query');
    },
    companyOnboarding(variables: Types.CompanyOnboardingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CompanyOnboardingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CompanyOnboardingQuery>(Operations.CompanyOnboardingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'companyOnboarding', 'query');
    },
    companyOnboardings(variables: Types.CompanyOnboardingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CompanyOnboardingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CompanyOnboardingsQuery>(Operations.CompanyOnboardingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'companyOnboardings', 'query');
    },
    currentWeekManagement(variables?: Types.CurrentWeekManagementQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CurrentWeekManagementQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CurrentWeekManagementQuery>(Operations.CurrentWeekManagementDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'currentWeekManagement', 'query');
    },
    currentWorkerAssignment(variables: Types.CurrentWorkerAssignmentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CurrentWorkerAssignmentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CurrentWorkerAssignmentQuery>(Operations.CurrentWorkerAssignmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'currentWorkerAssignment', 'query');
    },
    detailEmployer(variables: Types.DetailEmployerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DetailEmployerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DetailEmployerQuery>(Operations.DetailEmployerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'detailEmployer', 'query');
    },
    discovers(variables?: Types.DiscoversQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DiscoversQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DiscoversQuery>(Operations.DiscoversDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'discovers', 'query');
    },
    downloadTemplate(variables: Types.DownloadTemplateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.DownloadTemplateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.DownloadTemplateQuery>(Operations.DownloadTemplateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'downloadTemplate', 'query');
    },
    employerAppInit(variables?: Types.EmployerAppInitQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerAppInitQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerAppInitQuery>(Operations.EmployerAppInitDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerAppInit', 'query');
    },
    employerDetailClient(variables: Types.EmployerDetailClientQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerDetailClientQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerDetailClientQuery>(Operations.EmployerDetailClientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerDetailClient', 'query');
    },
    employerDetailDraftJob(variables: Types.EmployerDetailDraftJobQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerDetailDraftJobQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerDetailDraftJobQuery>(Operations.EmployerDetailDraftJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerDetailDraftJob', 'query');
    },
    employerDetailInterview(variables: Types.EmployerDetailInterviewQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerDetailInterviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerDetailInterviewQuery>(Operations.EmployerDetailInterviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerDetailInterview', 'query');
    },
    employerDetailJobApplicant(variables: Types.EmployerDetailJobApplicantQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerDetailJobApplicantQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerDetailJobApplicantQuery>(Operations.EmployerDetailJobApplicantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerDetailJobApplicant', 'query');
    },
    employerDetailJobTemplate(variables: Types.EmployerDetailJobTemplateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerDetailJobTemplateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerDetailJobTemplateQuery>(Operations.EmployerDetailJobTemplateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerDetailJobTemplate', 'query');
    },
    employerDetailLocation(variables: Types.EmployerDetailLocationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerDetailLocationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerDetailLocationQuery>(Operations.EmployerDetailLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerDetailLocation', 'query');
    },
    employerFavoritedWorkers(variables: Types.EmployerFavoritedWorkersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerFavoritedWorkersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerFavoritedWorkersQuery>(Operations.EmployerFavoritedWorkersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerFavoritedWorkers', 'query');
    },
    employerJobMatches(variables: Types.EmployerJobMatchesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerJobMatchesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerJobMatchesQuery>(Operations.EmployerJobMatchesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerJobMatches', 'query');
    },
    employerJobsByFavoritedWorker(variables?: Types.EmployerJobsByFavoritedWorkerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerJobsByFavoritedWorkerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerJobsByFavoritedWorkerQuery>(Operations.EmployerJobsByFavoritedWorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerJobsByFavoritedWorker', 'query');
    },
    employerListClients(variables?: Types.EmployerListClientsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerListClientsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerListClientsQuery>(Operations.EmployerListClientsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerListClients', 'query');
    },
    employerListContactForms(variables?: Types.EmployerListContactFormsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerListContactFormsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerListContactFormsQuery>(Operations.EmployerListContactFormsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerListContactForms', 'query');
    },
    employerListDraftJobs(variables?: Types.EmployerListDraftJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerListDraftJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerListDraftJobsQuery>(Operations.EmployerListDraftJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerListDraftJobs', 'query');
    },
    employerListInterviews(variables?: Types.EmployerListInterviewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerListInterviewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerListInterviewsQuery>(Operations.EmployerListInterviewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerListInterviews', 'query');
    },
    employerListJobApplicants(variables?: Types.EmployerListJobApplicantsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerListJobApplicantsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerListJobApplicantsQuery>(Operations.EmployerListJobApplicantsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerListJobApplicants', 'query');
    },
    employerListJobTemplates(variables?: Types.EmployerListJobTemplatesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerListJobTemplatesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerListJobTemplatesQuery>(Operations.EmployerListJobTemplatesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerListJobTemplates', 'query');
    },
    employerListLocations(variables?: Types.EmployerListLocationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerListLocationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerListLocationsQuery>(Operations.EmployerListLocationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerListLocations', 'query');
    },
    employerListWorkers(variables: Types.EmployerListWorkersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerListWorkersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerListWorkersQuery>(Operations.EmployerListWorkersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerListWorkers', 'query');
    },
    employerSearchJobs(variables?: Types.EmployerSearchJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerSearchJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerSearchJobsQuery>(Operations.EmployerSearchJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerSearchJobs', 'query');
    },
    employerSearchWorkers(variables: Types.EmployerSearchWorkersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerSearchWorkersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerSearchWorkersQuery>(Operations.EmployerSearchWorkersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerSearchWorkers', 'query');
    },
    employerSummary(variables: Types.EmployerSummaryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerSummaryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerSummaryQuery>(Operations.EmployerSummaryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerSummary', 'query');
    },
    employerTalentJobs(variables?: Types.EmployerTalentJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerTalentJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerTalentJobsQuery>(Operations.EmployerTalentJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerTalentJobs', 'query');
    },
    employerTalentWorkers(variables: Types.EmployerTalentWorkersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerTalentWorkersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerTalentWorkersQuery>(Operations.EmployerTalentWorkersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerTalentWorkers', 'query');
    },
    employerWorkerDetails(variables: Types.EmployerWorkerDetailsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerWorkerDetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerWorkerDetailsQuery>(Operations.EmployerWorkerDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerWorkerDetails', 'query');
    },
    employerWorkerJobMatches(variables: Types.EmployerWorkerJobMatchesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.EmployerWorkerJobMatchesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.EmployerWorkerJobMatchesQuery>(Operations.EmployerWorkerJobMatchesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'employerWorkerJobMatches', 'query');
    },
    exportFile(variables: Types.ExportFileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ExportFileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ExportFileQuery>(Operations.ExportFileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'exportFile', 'query');
    },
    favoritedJobs(variables?: Types.FavoritedJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.FavoritedJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.FavoritedJobsQuery>(Operations.FavoritedJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'favoritedJobs', 'query');
    },
    hotJobs(variables?: Types.HotJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.HotJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.HotJobsQuery>(Operations.HotJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'hotJobs', 'query');
    },
    importBatch(variables: Types.ImportBatchQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ImportBatchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ImportBatchQuery>(Operations.ImportBatchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'importBatch', 'query');
    },
    invoiceDetails(variables: Types.InvoiceDetailsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.InvoiceDetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.InvoiceDetailsQuery>(Operations.InvoiceDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'invoiceDetails', 'query');
    },
    invoices(variables?: Types.InvoicesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.InvoicesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.InvoicesQuery>(Operations.InvoicesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'invoices', 'query');
    },
    job(variables: Types.JobQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.JobQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.JobQuery>(Operations.JobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'job', 'query');
    },
    jobAlerts(variables?: Types.JobAlertsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.JobAlertsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.JobAlertsQuery>(Operations.JobAlertsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'jobAlerts', 'query');
    },
    jobApplicant(variables: Types.JobApplicantQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.JobApplicantQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.JobApplicantQuery>(Operations.JobApplicantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'jobApplicant', 'query');
    },
    jobApplicants(variables?: Types.JobApplicantsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.JobApplicantsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.JobApplicantsQuery>(Operations.JobApplicantsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'jobApplicants', 'query');
    },
    jobSearch(variables?: Types.JobSearchQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.JobSearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.JobSearchQuery>(Operations.JobSearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'jobSearch', 'query');
    },
    lastViewedJobs(variables?: Types.LastViewedJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.LastViewedJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.LastViewedJobsQuery>(Operations.LastViewedJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'lastViewedJobs', 'query');
    },
    likedJobs(variables?: Types.LikedJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.LikedJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.LikedJobsQuery>(Operations.LikedJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'likedJobs', 'query');
    },
    listEmployers(variables?: Types.ListEmployersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.ListEmployersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ListEmployersQuery>(Operations.ListEmployersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listEmployers', 'query');
    },
    messageThread(variables: Types.MessageThreadQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.MessageThreadQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.MessageThreadQuery>(Operations.MessageThreadDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'messageThread', 'query');
    },
    messageThreads(variables: Types.MessageThreadsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.MessageThreadsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.MessageThreadsQuery>(Operations.MessageThreadsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'messageThreads', 'query');
    },
    messages(variables: Types.MessagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.MessagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.MessagesQuery>(Operations.MessagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'messages', 'query');
    },
    notification(variables: Types.NotificationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.NotificationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.NotificationQuery>(Operations.NotificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'notification', 'query');
    },
    notifications(variables?: Types.NotificationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.NotificationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.NotificationsQuery>(Operations.NotificationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'notifications', 'query');
    },
    onboardingPart(variables: Types.OnboardingPartQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.OnboardingPartQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.OnboardingPartQuery>(Operations.OnboardingPartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'onboardingPart', 'query');
    },
    onboardingParts(variables: Types.OnboardingPartsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.OnboardingPartsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.OnboardingPartsQuery>(Operations.OnboardingPartsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'onboardingParts', 'query');
    },
    paginationAppliedJobs(variables?: Types.PaginationAppliedJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PaginationAppliedJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PaginationAppliedJobsQuery>(Operations.PaginationAppliedJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'paginationAppliedJobs', 'query');
    },
    paymentMethods(variables?: Types.PaymentMethodsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PaymentMethodsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PaymentMethodsQuery>(Operations.PaymentMethodsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'paymentMethods', 'query');
    },
    popularCities(variables?: Types.PopularCitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PopularCitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PopularCitiesQuery>(Operations.PopularCitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'popularCities', 'query');
    },
    popularCityJobs(variables: Types.PopularCityJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PopularCityJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PopularCityJobsQuery>(Operations.PopularCityJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'popularCityJobs', 'query');
    },
    publicJob(variables: Types.PublicJobQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PublicJobQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PublicJobQuery>(Operations.PublicJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'publicJob', 'query');
    },
    quiz(variables: Types.QuizQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.QuizQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.QuizQuery>(Operations.QuizDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'quiz', 'query');
    },
    quizzes(variables: Types.QuizzesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.QuizzesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.QuizzesQuery>(Operations.QuizzesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'quizzes', 'query');
    },
    recruiters(variables?: Types.RecruitersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.RecruitersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.RecruitersQuery>(Operations.RecruitersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'recruiters', 'query');
    },
    savedFilters(variables: Types.SavedFiltersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SavedFiltersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SavedFiltersQuery>(Operations.SavedFiltersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'savedFilters', 'query');
    },
    signedUrls(variables: Types.SignedUrlsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SignedUrlsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SignedUrlsQuery>(Operations.SignedUrlsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signedUrls', 'query');
    },
    similarAJob(variables: Types.SimilarAJobQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SimilarAJobQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SimilarAJobQuery>(Operations.SimilarAJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'similarAJob', 'query');
    },
    similarSearchJobs(variables?: Types.SimilarSearchJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SimilarSearchJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SimilarSearchJobsQuery>(Operations.SimilarSearchJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'similarSearchJobs', 'query');
    },
    states(variables: Types.StatesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.StatesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.StatesQuery>(Operations.StatesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'states', 'query');
    },
    suggestionJobs(variables?: Types.SuggestionJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SuggestionJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SuggestionJobsQuery>(Operations.SuggestionJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'suggestionJobs', 'query');
    },
    supportDocuments(variables: Types.SupportDocumentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SupportDocumentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SupportDocumentsQuery>(Operations.SupportDocumentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'supportDocuments', 'query');
    },
    trendingJobs(variables?: Types.TrendingJobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.TrendingJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.TrendingJobsQuery>(Operations.TrendingJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'trendingJobs', 'query');
    },
    workedTimecards(variables: Types.WorkedTimecardsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkedTimecardsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkedTimecardsQuery>(Operations.WorkedTimecardsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workedTimecards', 'query');
    },
    workedTimesheet(variables: Types.WorkedTimesheetQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkedTimesheetQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkedTimesheetQuery>(Operations.WorkedTimesheetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workedTimesheet', 'query');
    },
    workedTimesheetHistories(variables?: Types.WorkedTimesheetHistoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkedTimesheetHistoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkedTimesheetHistoriesQuery>(Operations.WorkedTimesheetHistoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workedTimesheetHistories', 'query');
    },
    worker(variables: Types.WorkerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerQuery>(Operations.WorkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'worker', 'query');
    },
    workerAssignment(variables: Types.WorkerAssignmentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerAssignmentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerAssignmentQuery>(Operations.WorkerAssignmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerAssignment', 'query');
    },
    workerAssignments(variables: Types.WorkerAssignmentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerAssignmentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerAssignmentsQuery>(Operations.WorkerAssignmentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerAssignments', 'query');
    },
    workerBlocks(variables: Types.WorkerBlocksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerBlocksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerBlocksQuery>(Operations.WorkerBlocksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerBlocks', 'query');
    },
    workerCertificationOverview(variables: Types.WorkerCertificationOverviewQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerCertificationOverviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerCertificationOverviewQuery>(Operations.WorkerCertificationOverviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerCertificationOverview', 'query');
    },
    workerCertifications(variables: Types.WorkerCertificationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerCertificationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerCertificationsQuery>(Operations.WorkerCertificationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerCertifications', 'query');
    },
    workerEducationOverview(variables: Types.WorkerEducationOverviewQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerEducationOverviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerEducationOverviewQuery>(Operations.WorkerEducationOverviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerEducationOverview', 'query');
    },
    workerEducations(variables: Types.WorkerEducationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerEducationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerEducationsQuery>(Operations.WorkerEducationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerEducations', 'query');
    },
    workerOnboarding(variables: Types.WorkerOnboardingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerOnboardingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerOnboardingQuery>(Operations.WorkerOnboardingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerOnboarding', 'query');
    },
    workerOnboardingOverview(variables: Types.WorkerOnboardingOverviewQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerOnboardingOverviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerOnboardingOverviewQuery>(Operations.WorkerOnboardingOverviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerOnboardingOverview', 'query');
    },
    workerOnboardingPart(variables: Types.WorkerOnboardingPartQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerOnboardingPartQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerOnboardingPartQuery>(Operations.WorkerOnboardingPartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerOnboardingPart', 'query');
    },
    workerOnboardingParts(variables: Types.WorkerOnboardingPartsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerOnboardingPartsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerOnboardingPartsQuery>(Operations.WorkerOnboardingPartsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerOnboardingParts', 'query');
    },
    workerOnboardings(variables: Types.WorkerOnboardingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerOnboardingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerOnboardingsQuery>(Operations.WorkerOnboardingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerOnboardings', 'query');
    },
    workerQuiz(variables: Types.WorkerQuizQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerQuizQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerQuizQuery>(Operations.WorkerQuizDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerQuiz', 'query');
    },
    workerQuizzes(variables: Types.WorkerQuizzesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerQuizzesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerQuizzesQuery>(Operations.WorkerQuizzesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerQuizzes', 'query');
    },
    workerReferences(variables: Types.WorkerReferencesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerReferencesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerReferencesQuery>(Operations.WorkerReferencesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerReferences', 'query');
    },
    workerSocialAuthentications(variables?: Types.WorkerSocialAuthenticationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerSocialAuthenticationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerSocialAuthenticationsQuery>(Operations.WorkerSocialAuthenticationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerSocialAuthentications', 'query');
    },
    workerSpecialties(variables: Types.WorkerSpecialtiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerSpecialtiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerSpecialtiesQuery>(Operations.WorkerSpecialtiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerSpecialties', 'query');
    },
    workerToken(variables: Types.WorkerTokenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.WorkerTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.WorkerTokenQuery>(Operations.WorkerTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'workerToken', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;