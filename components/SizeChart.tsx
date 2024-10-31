import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const SizeChart = () => {

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <h2 className='text-sm font-bold underline mb-4 cursor-pointer'>See Size Chart</h2>
                </DialogTrigger>
                <DialogContent className="sm:max-w-auto overflow-y-auto h-full">
                    <DialogHeader>
                        <DialogTitle>Fit & Alternative Sizing</DialogTitle>
                        <DialogDescription>
                            Allbirds fit true to size for most customers. If you have wide feet or are between sizes, we suggest you size up for all styles except our Plant Pacer (size down for those).
                            <br />
                            <br />
                            Did you know that our shoes are actually unisex? You can easily cross over to find shoes in your size.
                            <br />
                            <br />
                            <b>Here’s how it works:</b>
                            <br />
                            <br />
                            If you wear a men’s size 7, try a women’s size 8 or 9.
                            <br />
                            <br />
                            If you wear a women’s size 12, try a men’s size 10 or 11.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Table>
                                <TableCaption>Men's Shoes</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>US</TableHead>
                                        <TableHead>UK</TableHead>
                                        <TableHead>EU</TableHead>
                                        <TableHead>cm</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>8</TableCell>
                                        <TableCell>7</TableCell>
                                        <TableCell>41</TableCell>
                                        <TableCell>26</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>9</TableCell>
                                        <TableCell>8</TableCell>
                                        <TableCell>42</TableCell>
                                        <TableCell>27</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10</TableCell>
                                        <TableCell>9</TableCell>
                                        <TableCell>43</TableCell>
                                        <TableCell>28</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>11</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>44</TableCell>
                                        <TableCell>29</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12</TableCell>
                                        <TableCell>11</TableCell>
                                        <TableCell>45</TableCell>
                                        <TableCell>30</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>13</TableCell>
                                        <TableCell>12</TableCell>
                                        <TableCell>46</TableCell>
                                        <TableCell>31</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>14</TableCell>
                                        <TableCell>13</TableCell>
                                        <TableCell>47</TableCell>
                                        <TableCell>32</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Table>
                                <TableCaption>Women's Shoes</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>US</TableHead>
                                        <TableHead>UK</TableHead>
                                        <TableHead>EU</TableHead>
                                        <TableHead>cm</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>5</TableCell>
                                        <TableCell>2 - 2.5</TableCell>
                                        <TableCell>35</TableCell>
                                        <TableCell>22</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>6</TableCell>
                                        <TableCell>3 - 3.5</TableCell>
                                        <TableCell>36</TableCell>
                                        <TableCell>23</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>7</TableCell>
                                        <TableCell>4 - 4.5</TableCell>
                                        <TableCell>37</TableCell>
                                        <TableCell>24</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>8</TableCell>
                                        <TableCell>5 - 5.5</TableCell>
                                        <TableCell>38</TableCell>
                                        <TableCell>25</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>9</TableCell>
                                        <TableCell>6 - 6.5</TableCell>
                                        <TableCell>39</TableCell>
                                        <TableCell>26</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10</TableCell>
                                        <TableCell>7 - 7.5</TableCell>
                                        <TableCell>40</TableCell>
                                        <TableCell>27</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>11</TableCell>
                                        <TableCell>8 - 8.5</TableCell>
                                        <TableCell>41</TableCell>
                                        <TableCell>28</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <DialogFooter>
                        <p>Still debating? No worries - our hassle-free 30-day return policy allows you to try us on for size and find the perfect pair.</p>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SizeChart
