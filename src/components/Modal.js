import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Moda({
	saveUpdates,
	newValues,
	setNewValues,
	setIsEdit,
}) {
	const [open, setOpen] = useState(true);

	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root
			onClick={() => setIsEdit(false)}
			show={open}
			as={Fragment}
		>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={setOpen}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mb-6 w-96 sm:my-8 sm:w-full sm:max-w-lg">
								<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
									<div className="">
										<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
											<Dialog.Title
												as="h3"
												className="text-base font-semibold leading-6 text-gray-900"
											>
												Edit Here...
											</Dialog.Title>
											<div className="mt-2">
												<form
													className=" flex flex-col gap-3"
													onSubmit={(e) => saveUpdates(e)}
													action=""
												>
													<input
														className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
														type="text"
														value={newValues.name}
														onChange={(e) =>
															setNewValues({
																...newValues,
																name: e.target.value,
															})
														}
													/>
													<input
														className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
														type="text"
														value={newValues.email}
														onChange={(e) =>
															setNewValues({
																...newValues,
																email: e.target.value,
															})
														}
													/>
													<input
														className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
														type="text"
														value={newValues.mobil_umber}
														onChange={(e) =>
															setNewValues({
																...newValues,
																mobil_umber: e.target.value,
															})
														}
													/>
													<div className=" relative flex justify-stert items-center gap-1">
														<div className="absolute w-5 h-5 rounded-full left-2">
															<img
																className="rounded-full"
																src={newValues.profile_image}
																alt=""
															/>
														</div>
														<input
															type="text"
															className="mt-1 block w-full pl-7 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                             focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
															value={newValues.profile_image}
															onChange={(e) => {
																setNewValues({
																	...newValues,
																	profile_image: e.target.value,
																});
															}}
														/>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
										onClick={(e) => {
											saveUpdates(e);
											setOpen(false);
										}}
									>
										Save
									</button>
									<button
										type="button"
										className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
										onClick={() => {
											setIsEdit(false);
											setOpen(false);
										}}
										ref={cancelButtonRef}
									>
										Cancel
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
