const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema(
	{
		// identifier: {
		// 	type: Number,
		// 	increment: true,
		// 	default: 0,
		// },
		belongsTo: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		status: {
			type: Number,
			enum: [0, 1, 2, 3, 4],
			default: 0,
			required: true,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		fatherName: {
			type: String,
		},
		motherName: {
			type: String,
		},
		gender: {
			type: String,
		},
		birthCountry: {
			type: String,
		},
		birthPlace: {
			type: String,
		},
		birthDate: {
			type: String,
		},
		residenceCountry: {
			type: String,
		},
		residenceAddress: {
			type: String,
		},
		postcode: {
			type: String,
		},
		residenceCity: {
			type: String,
		},
		residenceLocation: {
			type: String,
		},
		residenceTel: {
			type: String,
		},
		residenceMobile: {
			type: String,
		},
		email: {
			type: String,
		},
		afm: {
			type: String,
		},
		idType: {
			type: String,
		},
		idDate: {
			type: String,
		},
		idNumber: {
			type: String,
		},
		authority: {
			type: String,
		},
		degreeType: {
			type: String,
		},
		studyType: {
			type: String,
		},
		studyCountry: {
			type: String,
		},
		studyCountryUni: {
			type: String,
		},
		studyTitle: {
			type: String,
		},
		studyCredits: {
			type: String,
		},
		studyStartDate: {
			type: String,
		},
		studyEndDate: {
			type: String,
		},
		studyDuration: {
			type: String,
		},
		matchDegreeType: {
			type: String,
		},
		matchStudyType: {
			type: String,
		},
		matchStudyCountry: {
			type: String,
		},
		matchStudyCountryUni: {
			type: String,
		},
		matchStudyTitle: {
			type: String,
		},
		attachments: [
			// {
			// 	type: Buffer,
			// },
		],
	},
	{
		timestamps: true,
	}
);

// applicationSchema.pre('save', function (next) {
// 	var doc = this;

// 	Application.findByIdAndUpdateAsync({ _id: this._id }, { $inc: { seq: 1 } }, { new: true, upsert: true })
// 		.then(function (count) {
// 			doc.sort = count.seq;
// 			next();
// 		})
// 		.catch(function (error) {
// 			throw error;
// 		});
// });

module.exports = mongoose.model('Application', applicationSchema);
