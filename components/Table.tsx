import { CheckIcon } from "@heroicons/react/outline";
import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
	products: Product[];
	selectedPlan: Product | null;
}

function Table({ products, selectedPlan }: Props) {
	return (
		<table>
			<tbody className="divide-y divide-[gray]">
				<tr className="tableRow">
					<td className="tableDataTitle">Monthly price</td>
					{products.map((product) => (
						<td
							className={`tableDataFeature ${
								selectedPlan?.id === product.id
									? "text-[#E50914]"
									: "text-[gray]"
							}`}
							key={product.id}
						>
							₹{product.prices[0].unit_amount! / 100}
						</td>
					))}
				</tr>
				<tr className="tableRow">
					<td className="tableDataTitle">Video quality</td>
					{products.map((product) => (
						<td
							className={`tableDataFeature ${
								selectedPlan?.id === product.id
									? "text-[#E50914]"
									: "text-[gray]"
							}`}
							key={product.id}
						>
							{product.metadata.videoQuality}
						</td>
					))}
				</tr>
				<tr className="tableRow">
					<td className="tableDataTitle">Resolution</td>
					{products.map((product) => (
						<td
							className={`tableDataFeature ${
								selectedPlan?.id === product.id
									? "text-[#E50914]"
									: "text-[gray]"
							}`}
							key={product.id}
						>
							{product.metadata.resolution}
						</td>
					))}
				</tr>
				<tr className="tableRow pt-1.5">
					<td className="tableDataTitle">
						Watch on your TV, computer, mobile phone and tablet
					</td>
					{products.map((product) => (
						<td
							className={`tableDataFeature ${
								selectedPlan?.id === product.id
									? "text-[#E50914]"
									: "text-[gray]"
							}`}
							key={product.id}
						>
							{product.metadata.portability === "true" && (
								<CheckIcon className="inline-block h-8 w-8" />
							)}
						</td>
					))}
				</tr>
			</tbody>
			<p className="p-[0.875rem]">
				HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
				to your internet service and device capabilities. Not all content is
				available in all resolutions. See our Terms of Use for more details.
				Only people who live with you may use your account. Watch on 4 different
				devices at the same time with Premium, 2 with Standard, and 1 with Basic
				and Mobile.
			</p>
		</table>
	);
}

export default Table;